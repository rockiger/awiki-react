import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
// import Tree from './Tree';
import { smallTree, tree, blueprintTree } from './treeSampleData.js';

import { FocusStyleManager, Classes, Icon, ITreeNode, Position, Tooltip, Tree } from "@blueprintjs/core";
FocusStyleManager.onlyShowFocusOnTabs();

import { BASEPATH, EXT } from '../constants';
//import { sidebar, sidebar__ul } from './index.css';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { nodes: blueprintTree }

    this.handleNodeClick = this.handleNodeClick.bind(this);
    this.handleNodeCollapse = this.handleNodeCollapse.bind(this);
    this.handleNodeExpand = this.handleNodeExpand.bind(this);
  }

  handleNodeClick(nodeData, e) {
      console.log('handleNodeClick:', nodeData, e);
      this.setState(this.state)
  }
  
  handleNodeCollapse(nodeData) {
      console.log('handleNodeCollapse:', nodeData)
      nodeData.isExpanded = false;
      this.setState(this.state)
  }
  
  handleNodeExpand(nodeData) {
      console.log('handleNodeExpand:', nodeData, this.state)
      nodeData.isExpanded = true;
      this.setState(this.state)
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
          contents={this.state.nodes}
          onNodeClick={this.handleNodeClick}
          onNodeCollapse={this.handleNodeCollapse}
          onNodeExpand={this.handleNodeExpand}
        />
      </div>
    );
  }
}


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
