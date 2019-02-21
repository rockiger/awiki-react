import { remote } from 'electron';

import fs from 'fs';
import path from 'path';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Tree from './Tree';
import {
    FocusStyleManager, ITreeNode, Tree,
} from '@blueprintjs/core';

import { log } from 'handlebars';
import { fileDir, normalizeCurrentFile } from '../helper';
import { BASEPATH, EXT } from '../constants';

// "import" from remote
const { MenuItem, Menu } = remote;


FocusStyleManager.onlyShowFocusOnTabs();
// import { sidebar, sidebar__ul } from './index.css';


// directoryTreeToObj(BASEPATH, (err, results) => {
//     if (err) throw err;
//     console.log(results);
// },
// '/home/macco/mega/awiki/Home');


export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { nodes: [] };

        this.handleNodeClick = this.handleNodeClick.bind(this);
        this.handleNodeCollapse = this.handleNodeCollapse.bind(this);
        this.handleNodeExpand = this.handleNodeExpand.bind(this);
        this.handleNodeContextMenu = this.handleNodeContextMenu.bind(this);
        this.createContextMenu = this.createContextMenu.bind(this);
        this.populateSidebar = this.populateSidebar.bind(this);
        this.updateSidebar = this.updateSidebar.bind(this);
    }

    componentDidMount() {
        this.populateSidebar();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        if (this.props.updateSidebar) this.populateSidebar();
        if (this.props.currentFile !== prevProps.currentFile) {
            this.updateSidebar();
        }
    }

    populateSidebar() {
        directoryTreeToObj(BASEPATH, (err, results) => {
            if (err) throw err;
            if (results) {
                const nodes = results;
                nodes[0].isExpanded = true;
                this.setState({ nodes });
                this.props.setUpdateSidebar(false);
            }
        },
        this.props.currentFile);
    }

    updateSidebar() {
        console.log('UpdateSidebar');
        const nodes = this.state.nodes;
        Sidebar.forEachNode(nodes, (n) => {
            n.isSelected = (normalizeCurrentFile(n.id) === normalizeCurrentFile(this.props.currentFile));
            n.isExpanded = n.isExpanded
                           || (this.props.currentFile.includes(n.id)
                               && this.props.currentFile.length > n.id.length);
        });
        this.setState(nodes);
    }

    /**
     * @param {array} nodes
     * @param {(node) => void} callback
     */
    static forEachNode(nodes, callback) {
        if (nodes == null) {
            return [];
        }
        for (const node of nodes) {
            callback(node);
            Sidebar.forEachNode(node.childNodes, callback);
        }
    }

    handleNodeClick(nodeData, ev) {
        console.log('handleNodeClick:', nodeData, ev);
        this.props.setCurrentFile(nodeData.id);
        this.setState(this.state);
    }

    handleNodeCollapse(nodeData) {
        console.log('handleNodeCollapse:', nodeData);
        nodeData.isExpanded = false;
        this.setState(this.state);
    }

    handleNodeExpand(nodeData) {
        console.log('handleNodeExpand:', nodeData, this.state);
        nodeData.isExpanded = true;
        this.setState(this.state);
    }

    handleNodeContextMenu(nodeData) {
        console.log('handeNodeContextMenu:', nodeData);
        this.createContextMenu(nodeData.id);
    }

    createContextMenu(menuPath) {
        const { toggleNewFileDialog, setNewFileDir } = this.props;
        const menu = new Menu();
        // Build menu one item at a time, unlike
        menu.append(new MenuItem({
            label: 'New Sub Page...',
            click() {
                console.log('create sub page for:', menuPath);
                setNewFileDir(fileDir(menuPath));
                toggleNewFileDialog();
            },
        }));

        menu.popup();
    }

    render() {
        return (
            <div className="sidebar">
                <Tree
                    contents={this.state.nodes}
                    onNodeClick={this.handleNodeClick}
                    onNodeCollapse={this.handleNodeCollapse}
                    onNodeExpand={this.handleNodeExpand}
                    onNodeContextMenu={this.handleNodeContextMenu}
                />
            </div>
        );
    }
}

/**
 * Creates a sorted directory tree with folders and text-files combined
 * @param {string} dir - the (absolute) path to the directory
 * @param {function} done - the callback to handle the result (err, result<array>)
 */
function directoryTreeToObj(dir, done, currentFile = '') {
    const results = [];
    fs.readdir(dir, (err, list) => {
        if (err) return done(err);

        let pending = list.length;

        if (!pending) {
            return done(null, {
                id: dir,
                key: dir,
                label: path.basename(dir),
                type: 'folder',
                childNodes: results.sort(sortTree),
                isSelected: (dir === currentFile),
                isExpanded: currentFile.includes(dir),
            });
        }

        list.forEach((file) => {
            const nFile = path.resolve(dir, file);
            fs.stat(nFile, (err, stat) => {
                if (stat && stat.isDirectory()) {
                    directoryTreeToObj(nFile, (err, res) => {
                        results.push({
                            id: nFile,
                            label: path.basename(nFile),
                            type: 'folder',
                            childNodes: res.sort(sortTree),
                            isSelected: (nFile === currentFile),
                            isExpanded: currentFile.includes(nFile)
                                        && currentFile.length > nFile.length,
                        });
                        if (!--pending) done(null, results.sort(sortTree));
                    }, currentFile);
                } else {
                    fs.stat(withoutExt(nFile), (err, stat) => {
                        if (err) {
                            if (nFile.endsWith(EXT)) {
                                results.push({
                                    id: nFile,
                                    label: withoutExt(path.basename(nFile)),
                                    type: 'file',
                                    isSelected: (nFile === currentFile),
                                    isExpanded: currentFile.includes(nFile),
                                });
                            }
                        }
                    });
                    if (!--pending) done(null, results);
                }
            });
        });
    });
}

/**
 * Sorts an array of TreeNodes
 * https://blueprintjs.com/docs/#core/components/tree.tree-node
 * @param {ITreeNode} a
 * @param {ITreeNode} b
 */
function sortTree(a, b) {
    if (a.label < b.label) return -1;
    if (a.label > b.label) return 1;
    return 0;
}

/**
 * Removes the markdown extension
 * @param {string} fileName - the filename to remove the extension
 */
function withoutExt(fileName) {
    return fileName.slice(0, -EXT.length);
}
