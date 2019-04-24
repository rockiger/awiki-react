import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App, {
    Sidebar, NewFileDialog, OpenPageBar,
} from './app';

import { HOMEPATH, DEFAULT_PAGE } from './constants';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
    it('renders shallow without crashing', () => {
        const div = document.createElement('div');
        shallow(
            <App />,
        );
    });
});

describe('Sidebar', () => {
    it('renders shallow without crashing', () => {
        const div = shallow(
            <Sidebar
                currentFile=""
                updateSidebar={false}
                setCurrentFile={() => {}}
                toggleNewFileDialog={() => {}}
                setNewFileDir={() => {}}
                setUpdateSidebar={() => {}}
            />,
        );
        expect(div.find('.sidebar').length).toBe(1);
    });
});

describe('OpenPageBar', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <OpenPageBar
                isOpen={false}
                setCurrentFile={() => {}}
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
