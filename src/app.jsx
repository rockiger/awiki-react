import React from 'react';

import WikiEditor from './components/WikiEditor';
import Sidebar from './components/Sidebar';
import NewFileDialog from './components/NewFileDialog';

const DEFAULT_FILE = 'Home';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentFile: '/home/macco/mega/awiki/Home/Bücher/Bergauf_mit_Rückenwind',
            newFileDialog: false,
            newFileDir: '',
        };

        this.setCurrentFile = this.setCurrentFile.bind(this);
        this.toggleNewFileDialog = this.toggleNewFileDialog.bind(this);
        this.setNewFileDir = this.setNewFileDir.bind(this);
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
                <NewFileDialog
                    isOpen={this.state.newFileDialog}
                    onClose={this.toggleNewFileDialog}
                    newFileDir={this.state.newFileDir}
                    setCurrentFile={this.setCurrentFile}
                />
                <Sidebar
                    setCurrentFile={this.setCurrentFile}
                    toggleNewFileDialog={this.toggleNewFileDialog}
                    setNewFileDir={this.setNewFileDir}
                />
                <main style={{ padding: 0, overflowY: 'hidden' }}>
                    <WikiEditor
                        currentFile={this.state.currentFile}
                        setCurrentFile={this.setCurrentFile}
                    />
                </main>
            </div>
        );
    }
}
