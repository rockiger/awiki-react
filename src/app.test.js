import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { Sidebar, NewFileDialog, OpenPageBar } from './app';

import { HOMEPATH, DEFAULT_PAGE } from './constants';

describe('OpenPageBar', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <OpenPageBar
                isOpen={false}
                setCurrentFile={HOMEPATH}
                setOpenPageBar={() => {}}
            />,
            div,
        );
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('NewFileDialog', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <NewFileDialog
                isOpen
                onClose={() => {}}
                newFileDir=""
                setCurrentFile={() => {}}
                setUpdateSidebar={() => {}}
            />,
            div,
        );
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('Search', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Sidebar
                currentFile={HOMEPATH}
                updateSidebar={false}
                setCurrentFile={() => {}}
                toggleNewFileDialog={() => {}}
                setNewFileDir={() => {}}
                setUpdateSidebar={() => {}}
            />, div,
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <Sidebar
                currentFile={HOMEPATH}
                updateSidebar={false}
                setCurrentFile={() => {}}
                toggleNewFileDialog={() => {}}
                setNewFileDir={() => {}}
                setUpdateSidebar={() => {}}
            />,
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
