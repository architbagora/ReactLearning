import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state ={
      count: 0
    };
  }

  btnClick(){
    this.setState({
      count : this.state.count + 1
    });
  }

  render() {
    return (
      <div className="App">
         <button onClick ={this.btnClick.bind(this)} >click here</button>
         <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default App;
