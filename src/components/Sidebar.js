import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
// import Tree from './Tree';
import { smallTree, tree } from './treeSampleData.js';

import { FocusStyleManager, Classes, Icon, ITreeNode, Position, Tooltip, Tree } from "@blueprintjs/core";
FocusStyleManager.onlyShowFocusOnTabs();

import { BASEPATH, EXT } from '../constants';
//import { sidebar, sidebar__ul } from './index.css';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  onToggle(node) {
    const { nodes } = this.state;
    nodes[node.path].isOpen = !node.isOpen;
    this.setState({ nodes });
  }

  render() {
    return (
      <div>
        <Tree
          contents={smallTree}
        />
        <ul style={{ paddingLeft: 0 }}>
          {tree.map(node => (
            <TreeNode
              onClickLeaf={this.props.onClickLeaf}
              key={node.relativePath}
              onToggle={this.onToggle}
              tree={tree}
              node={node}
              isOpen
            />
          ))}
        </ul>
      </div>
    );
  }
}

export class TreeNode extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    const { isOpen = false } = this.props;
    this.state = { isOpen };

    this.onClick = this.onClick.bind(this);
  }

  onClick(ev) {
    console.log('onClick');
    const isOpen = !this.state.isOpen;
    this.setState({ isOpen });
  }

  render() {
    const { tree, node } = this.props;
    const isTxt = node.name.endsWith(EXT);
    const isDir = node.type === 'dir';
    const name = isDir ? node.name : node.name.slice(0, -EXT.length);
    if (isDir && hasChild(node) && hasFile(name, tree)) {
      return (
        <li>
          {!this.state.isOpen && <FaChevronRight onClick={this.onClick} />}
          {this.state.isOpen && <FaChevronDown onClick={this.onClick} />}
          <span
            className="folder"
            onClick={e => this.props.onClickLeaf(e, node.relativePath)}
          >
            {node.name}
          </span>
          {hasChild(node) && this.state.isOpen && (
            <ul>
              {node.children.map(childNode => (
                <TreeNode
                  key={childNode.relativePath}
                  node={childNode}
                  tree={node.children}
                  onClickLeaf={this.props.onClickLeaf}
                />
              ))}
            </ul>
          )}
        </li>
      );
    }
    if (isTxt && !hasDirectory(name, tree)) {
      return (
        <li>
          <span className="file" onClick={e => this.props.onClickLeaf(e, node.relativePath)}>
            {name}
          </span>
        </li>
      );
    }
    return null;
  }
}

TreeNode.propTypes = {
  onToggle: PropTypes.func,
  tree: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      size: PropTypes.number,
      relativePath: PropTypes.string,
      children: PropTypes.array
    })
  )
};

function hasDirectory(name, list) {
  for (const e of list) {
    if (name === e.name && e.type === 'dir') return true;
  }
  return false;
}

function hasFile(name, list) {
  for (const e of list) {
    if (name + EXT === e.name) {
      return true;
    }
  }
  return false;
}

function hasChild(el) {
  if (el.hasOwnProperty('children')) {
    for (const child of el.children) {
      if (child.name.endsWith(EXT)) {
        return true;
      }
    }
  }
  return false;
}
