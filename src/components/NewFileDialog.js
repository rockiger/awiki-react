/*
 * Based on blueprint omnibar class
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import classNames from 'classnames';
import * as React from 'react';

import { InputGroup, Overlay } from '@blueprintjs/core';
import { Classes } from '@blueprintjs/select';

export default class NewFileDialog extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { value: props.value };

        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(ev) {
        if (ev.key === 'Enter') {
            console.log(this.state.value);
            // create new file
            // set the new file as currentFile
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
