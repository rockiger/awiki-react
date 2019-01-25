import React from 'react';

import WikiEditor from './components/WikiEditor';
import Sidebar from './components/Sidebar';

const DEFAULT_FILE = 'Home';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentFile: '/home/macco/mega/awiki/Home/Bücher/Bergauf_mit_Rückenwind',
        };

        this.setCurrentFile = this.setCurrentFile.bind(this);
    }

    setCurrentFile(relativePath) {
        console.log('onClickNode');
        console.log(relativePath);
        this.setState({
            currentFile: relativePath,
        });
        console.log(this.state);
    }

    render() {
        return (
            <div
                style={{ display: 'flex' }}
                className="app-container"
                data-tid="container"
            >
                <Sidebar setCurrentFile={this.setCurrentFile} />
                <main style={{ padding: 0, overflowY: 'hidden' }}>
                    <WikiEditor currentFile={this.state.currentFile} setCurrentFile={this.setCurrentFile} />
                </main>
            </div>
        );
    }
}
