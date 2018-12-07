import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h1>HEADER</h1>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div>
        <h1>CONTENT</h1>
      </div>
    );
  }
}

export default App;
