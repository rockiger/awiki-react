import fs from 'fs';
import path from 'path';

import React from 'react';

import Editor from 'tui-editor';

import { BASEPATH, EXT } from '../constants';

let TUIEDITOR;

function normalizeCurrentFile(relFilePath) {
    const filePathPlusExt = relFilePath.endsWith('.markdown') ? relFilePath : relFilePath + EXT;
    const absFilePath = filePathPlusExt;
    return absFilePath;
}

function writeEditorValue(state) {
    const { currentFile } = state;
    //   console.log('writeEditorValue:', currentFile);
    //   console.log('TUIEDITOR:', TUIEDITOR.getMarkdown());
    //   console.log(normalizeCurrentFile(currentFile));
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

/**
 * Export.
 */

export default WikiEditor;
