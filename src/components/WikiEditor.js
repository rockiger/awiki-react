import fs from 'fs';
import { shell } from 'electron';

import React from 'react';

import Editor from 'tui-editor';

import { BASEPATH, EXT } from '../constants';


let TUIEDITOR;

class WikiEditor extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
        this.state = {
            currentFile: this.props.currentFile,
            value: createEditorValue(this.props.currentFile),
        };

        window.addEventListener('beforeunload', ev => writeEditorValue(this.state));
        window.addEventListener('blur', ev => writeEditorValue(this.state));
    }


    static getDerivedStateFromProps(props, state) {
    // Store prevId in state so we can compare when props change.
    // Clear out previously-loaded data (so we don't render stale stuff).
        console.log('getDerivedStateFromProps');
        if (props.currentFile !== state.currentFile) {
            writeEditorValue(state);
            TUIEDITOR.setMarkdown(createEditorValue(props.currentFile));
            TUIEDITOR.moveCursorToStart(); // TODO Load positon in file
            TUIEDITOR.focus();
            return {
                currentFile: props.currentFile,
                value: createEditorValue(props.currentFile),
            };
        }

        // No state update necessary
        return null;
    }

    componentDidMount() {
        TUIEDITOR = new Editor({
            el: document.querySelector('#editSection'),
            initialEditType: 'wysiwyg',
            previewStyle: 'vertical',
            height: '100vh',
            exts: ['colorSyntax'],
            initialValue: createEditorValue(this.state.currentFile),
        });
        this.addClickEventListenersToLinks();
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        this.addClickEventListenersToLinks();
    }

    onClickInternalLink(ev) {
        ev.preventDefault();
        const filePath = decodeURI(ev.target.href.replace('file:///', '/'));
        this.props.setCurrentFile(filePath);
    }

    addClickEventListenersToLinks() {
        const links = document.querySelectorAll('.tui-editor-contents a');
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', (ev) => {
                if (ev.target.href.endsWith('.markdown')) {
                    console.log('Internal link clicked: ', ev.target.href);
                    this.onClickInternalLink(ev);
                } else {
                    console.log('External Link clicked', ev.target.href);
                    shell.openItem(ev.target.href);
                }
            });
        }
    }


    /**
   * Render.
   *
   * @return {Element}
   */

    // eslint-disable-next-line react/sort-comp
    render() {
        return (
            <div id="toastEditor">
                <div id="editSection" />
            </div>
        );
    }
}


function normalizeCurrentFile(relFilePath) {
    const filePathPlusExt = relFilePath.endsWith('.markdown') ? relFilePath : relFilePath + EXT;
    const absFilePath = filePathPlusExt;
    return absFilePath;
}

function writeEditorValue(state) {
    const { currentFile } = state;
    try {
        fs.writeFileSync(
            normalizeCurrentFile(currentFile),
            TUIEDITOR.getMarkdown(),
        );
    } catch (error) {
        console.log('Couldn\'t write file:', error);
    }
}
function createEditorValue(relFilePath) {
    const rawdata = fs.readFileSync(
        normalizeCurrentFile(relFilePath),
        'utf8',
    );
    return rawdata;
}

/**
 * Export.
 */

export default WikiEditor;
