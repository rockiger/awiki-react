import fs from 'fs';
import * as jetpack from 'fs-jetpack';
import { shell } from 'electron';

import React from 'react';
import Editor from 'tui-editor';

import { normalizeCurrentFile, fileDir } from '../helper';


let TuiEditor;

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
        this.imageBlobHook = this.imageBlobHook.bind(this);
    }


    static getDerivedStateFromProps(props, state) {
    // Store prevId in state so we can compare when props change.
    // Clear out previously-loaded data (so we don't render stale stuff).
        if (props.currentFile !== state.currentFile) {
            writeEditorValue(state);
            TuiEditor.setMarkdown(createEditorValue(props.currentFile));
            TuiEditor.moveCursorToStart(); // TODO Load positon in file
            TuiEditor.focus();
            return {
                currentFile: props.currentFile,
                value: createEditorValue(props.currentFile),
            };
        }

        // No state update necessary
        return null;
    }

    componentDidMount() {
        TuiEditor = new Editor({
            el: document.querySelector('#editSection'),
            initialEditType: 'wysiwyg',
            previewStyle: 'vertical',
            height: '100vh',
            exts: ['colorSyntax'],
            initialValue: createEditorValue(this.state.currentFile),
            hooks: {
                addImageBlobHook: this.imageBlobHook,
            },
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

    imageBlobHook(fileBlob, callback) {
        // Copies the image into the file structure of awiki
        const cwd = fileDir(this.state.currentFile);
        jetpack.dir(cwd);
        const fileDestination = jetpack.path(cwd, fileBlob.name);
        jetpack.copy(fileBlob.path, fileDestination);
        callback(fileDestination, fileBlob.name);
        return false;
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

function writeEditorValue(state) {
    const { currentFile } = state;
    try {
        fs.writeFileSync(
            normalizeCurrentFile(currentFile),
            TuiEditor.getMarkdown(),
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
