import React, { Component } from 'react';
import '../styles/App.css';
import SidebarContainer from '../containers/SidebarContainer';
import EditorContainer from '../containers/EditorContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Sidebar">
          <SidebarContainer />
        </div>
        <div className="Content">
          <EditorContainer />
        </div>
      </div>
    );
  }
}

export default App;
