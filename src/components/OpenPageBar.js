
import { find } from 'find-in-files';
import React from 'react';

import { Omnibar } from '@blueprintjs/select';
import { MenuItem } from '@blueprintjs/core';

import { HOMEPATH, EXT } from '../constants';

export default class OpenPageBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fileList: [],
            query: '',
        };
        this.populateFileList = this.populateFileList.bind(this);
        this.setFileList = this.setFileList.bind(this);
        this.onQueryChange = this.onQueryChange.bind(this);
        this.onItemSelect = this.onItemSelect.bind(this);
    }

    componentDidMount() {
        console.log('OpenPageBar did mount');
        this.populateFileList();
    }

    onItemSelect(item, ev) {
        console.log('onItemSelect', item);
        this.props.setCurrentFile(item);
        this.props.setOpenPageBar(false);
        this.setState({ query: '' });
    }

    onQueryChange(query) {
        this.setState({ query });
        if (query.length > 2) this.populateFileList(query);
    }

    setFileList(results) {
        const fileList = [];
        // eslint-disable-next-line
        for (const result in results) {
            fileList.push(result);
        }
        fileList.reverse();
        this.setState({ fileList });
    }

    populateFileList(searchString = '') {
        find({ term: searchString, flags: 'ig' }, HOMEPATH, `.${EXT}`)
            .then((results) => {
                this.setFileList(results);
            });
    }

    render() {
        return (
            <Omnibar
                isOpen={this.props.isOpen}
                onItemSelect={this.onItemSelect}
                items={this.state.fileList}
                itemRenderer={renderItem}
                onQueryChange={this.onQueryChange}
                query={this.state.query}
                // initialContent={this.state.items.slice(0, 10).map(this.renderItem)} https://github.com/palantir/blueprint/issues/3160
            />
        );
    }
}

function renderItem(filePath, { handleClick, modifiers, query }) {
    if (!modifiers.matchesPredicate) {
        return null;
    }

    const relPath = filePath.slice(HOMEPATH.length, -EXT.length);
    const text = relPath.split('/').join(' > ');
    return (
        <MenuItem
            key={filePath}
            active={modifiers.active}
            disabled={modifiers.disabled}
            onClick={handleClick}
            text={text}
        />
    );
}
