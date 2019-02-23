import fs from 'fs';
import * as jetpack from 'fs-jetpack';
import { shell } from 'electron';

import React from 'react';
import Editor from 'tui-editor';
import $ from 'jquery';

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
            toolbarItems: [
                'heading',
                'bold',
                'italic',
                'strike',
                'divider',
                'hr',
                'quote',
                'divider',
                'ul',
                'ol',
                'task',
                'divider',
                'table',
                'image',
                'link',
                'divider',
                'code',
                'codeblock',
                'divider',
                // ADD button method 1
                {
                    type: 'button',
                    options: {
                        $el: $('<button class="tui-help tui-toolbar-icons" type="button"><span icon="help" class="bp3-icon bp3-icon-help"><svg data-icon="help" width="14" height="14" viewBox="0 0 20 20"><desc>help</desc><path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM7.41 4.62c.65-.54 1.51-.82 2.56-.82.54 0 1.03.08 1.48.25.44.17.83.39 1.14.68.32.29.56.63.74 1.02.17.39.26.82.26 1.27s-.08.87-.24 1.23c-.16.37-.4.73-.71 1.11l-1.21 1.58c-.14.17-.28.33-.32.48-.05.15-.11.35-.11.6v.97H9v-2s.06-.58.24-.81l1.21-1.64c.25-.3.41-.56.51-.77s.14-.44.14-.67c0-.35-.11-.63-.32-.85s-.5-.33-.88-.33c-.37 0-.67.11-.89.33-.22.23-.37.54-.46.94-.03.12-.11.17-.23.16l-1.95-.29c-.12-.01-.16-.08-.14-.22.13-.93.52-1.67 1.18-2.22zM9 14h2.02L11 16H9v-2z" fill-rule="evenodd"></path></svg></span></button>'),
                        name: 'help',
                        className: '',
                        tooltip: 'Help',
                        event: 'help',
                    },
                },
            ],
        });
        TuiEditor.eventManager.addEventType('help');
        TuiEditor.eventManager.listen('help', () => {
            const w = window.open('./help.html', 'Keyboard Shortcuts');
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
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html) {
    const template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

/**
 * Export.
 */

export default WikiEditor;
