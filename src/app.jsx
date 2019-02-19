import React from 'react';

import WikiEditor from './components/WikiEditor';
import Sidebar from './components/Sidebar';
import NewFileDialog from './components/NewFileDialog';
import OpenPageBar from './components/OpenPageBar';

const DEFAULT_FILE = 'Home';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentFile: '/home/macco/mega/awiki/Home',
            newFileDialog: false,
            newFileDir: '',
            openPageBar: false,
            updateSidebar: true,
        };

        this.setCurrentFile = this.setCurrentFile.bind(this);
        this.toggleNewFileDialog = this.toggleNewFileDialog.bind(this);
        this.setNewFileDir = this.setNewFileDir.bind(this);
        this.setOpenPageBar = this.setOpenPageBar.bind(this);
        this.setUpdateSidebar = this.setUpdateSidebar.bind(this);
    }

    componentWillMount() {
        document.addEventListener('keydown', (ev) => {
            const ky = ev.key;
            if ((ev.ctrlKey && ev.key === 'p')
                || (ev.ctrlKey && ev.shiftKey && ev.key === 'F')) {
                this.setState({ openPageBar: !this.state.openPageBar });
            } else if (ev.key === 'Escape') {
                this.setState({ openPageBar: false });
            }
        });
    }

    setCurrentFile(relativePath) {
        console.log('onClickNode');
        console.log(relativePath);
        this.setState({
            currentFile: relativePath,
        });
    }

    setNewFileDir(newFileDir) {
        console.log(newFileDir);
        this.setState({ newFileDir });
    }

    setOpenPageBar(openPageBarState) {
        this.setState({ openPageBar: openPageBarState });
    }

    setUpdateSidebar(updateSidebar) {
        this.setState({ updateSidebar });
    }


    toggleNewFileDialog() {
        this.setState(prevState => ({ newFileDialog: !prevState.newFileDialog }));
    }

    render() {
        return (
            <div
                style={{ display: 'flex' }}
                className="app-container"
                data-tid="container"
            >
                <Sidebar
                    currentFile={this.state.currentFile}
                    updateSidebar={this.state.updateSidebar}
                    setCurrentFile={this.setCurrentFile}
                    toggleNewFileDialog={this.toggleNewFileDialog}
                    setNewFileDir={this.setNewFileDir}
                    setUpdateSidebar={this.setUpdateSidebar}
                />
                <main style={{ padding: 0, overflowY: 'hidden' }}>
                    <WikiEditor
                        currentFile={this.state.currentFile}
                        setCurrentFile={this.setCurrentFile}
                    />
                </main>
                <NewFileDialog
                    isOpen={this.state.newFileDialog}
                    onClose={this.toggleNewFileDialog}
                    newFileDir={this.state.newFileDir}
                    setCurrentFile={this.setCurrentFile}
                    setUpdateSidebar={this.setUpdateSidebar}
                />
                <OpenPageBar
                    isOpen={this.state.openPageBar}
                    setCurrentFile={this.setCurrentFile}
                    setOpenPageBar={this.setOpenPageBar}
                />
            </div>
        );
    }
}
