import React from 'react';

import WikiEditor from './components/WikiEditor';
import Sidebar from './components/Sidebar';

const DEFAULT_FILE = 'Home';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentFile: 'Home/Bücher/Bergauf_mit_Rückenwind',
    };

    this.onClickLeaf = this.onClickLeaf.bind(this);
  }

  onClickLeaf(event, relativePath) {
    console.log('onClickLeaf');
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
        <Sidebar onClickLeaf={this.onClickLeaf} />
        <main style={{ padding: 0, overflowY: 'hidden' }}>
          <WikiEditor currentFile={this.state.currentFile} />
        </main>
      </div>
    );
  }
}
