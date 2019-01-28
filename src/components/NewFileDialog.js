/*
 * Based on blueprint omnibar class
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import path from 'path';
import * as jetpack from 'fs-jetpack';

import classNames from 'classnames';
import * as React from 'react';

import { InputGroup, Overlay } from '@blueprintjs/core';
import { Classes } from '@blueprintjs/select';

import { EXT } from '../constants';

export default class NewFileDialog extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { value: props.value };

        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(ev) {
        if (ev.key === 'Enter' && this.state.value) {
            ev.preventDefault();
            console.log(this.state.value);
            console.log(this.props.newFileDir);
            const newFilePath = createFile(this.state.value.trim(), this.props.newFileDir);
            this.props.setCurrentFile(newFilePath);
            this.props.onClose();
        }
    }

    render() {
        return (
            <Overlay
                hasBackdrop
                isOpen={this.props.isOpen}
                className={classNames(Classes.OMNIBAR_OVERLAY)}
                onClose={this.props.onClose}
            >
                <div className={classNames(Classes.OMNIBAR)}>
                    <InputGroup
                        autoFocus
                        large
                        leftIcon="plus"
                        placeholder="Enter the name for the new page..."
                        onKeyDown={this.onKeyDown}
                        onChange={ev => this.setState({ value: ev.target.value })}
                    />
                </div>
            </Overlay>
        );
    }
}

function createFile(filename, dirpath) {
    const filepath = path.join(dirpath, filename + EXT);
    if (!jetpack.exists(filepath)) {
        const created = new Date();
        jetpack.file(filepath, { content: `# ${filename}\nCreated ${created.toDateString()}` });
        // TODO create a new leaf in the page tree, think about using a state-change to initiate recreating sidebar tree, maybe use componentWillReceiveProps or getDerivedStateFromProps
    }
    return filepath;
}
