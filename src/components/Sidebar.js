import fs from 'fs';
import path from 'path';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
// import Tree from './Tree';
import {
    FocusStyleManager, Classes, Icon, ITreeNode, Position, Tooltip, Tree,
} from '@blueprintjs/core';
import { smallTree, tree, blueprintTree } from './treeSampleData.js';


import { BASEPATH, EXT } from '../constants';

FocusStyleManager.onlyShowFocusOnTabs();
// import { sidebar, sidebar__ul } from './index.css';


directoryTreeToObj(BASEPATH, (err, results) => {
    if (err) throw err;
    console.log(results);
});


export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { nodes: [] };

        this.handleNodeClick = this.handleNodeClick.bind(this);
        this.handleNodeCollapse = this.handleNodeCollapse.bind(this);
        this.handleNodeExpand = this.handleNodeExpand.bind(this);
    }

    componentDidMount() {
        directoryTreeToObj(BASEPATH, (err, results) => {
            if (err) throw err;

            if (results) {
                const nodes = results;
                nodes[0].isExpanded = true;
                this.setState({ nodes });
            }
        });
    }

    handleNodeClick(nodeData, e) {
        console.log('handleNodeClick:', nodeData, e);
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

    render() {
        return (
            <div className="sidebar">
                <Tree
                    contents={this.state.nodes}
                    onNodeClick={this.handleNodeClick}
                    onNodeCollapse={this.handleNodeCollapse}
                    onNodeExpand={this.handleNodeExpand}
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
function directoryTreeToObj(dir, done) {
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
                        });
                        if (!--pending) done(null, results.sort(sortTree));
                    });
                } else {
                    fs.stat(withoutExt(nFile), (err, stat) => {
                        if (err) {
                            results.push({
                                id: nFile,
                                label: withoutExt(path.basename(nFile)),
                                type: 'file',
                            });
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
