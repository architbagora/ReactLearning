import React, { Component } from 'react';
import ReactDom  from 'react-dom';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data:''
    }
    this.updateState = this.updateState.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  updateState(e){
    this.setState({
        data: e.target.value
    });
  }

  clearInput(){
    this.setState({data:''});
    ReactDom.findDOMNode(this.refs.MyText).focus();
  }

  render() {
    return (
      <div >
        <input type = "text" value = {this.state.data} onChange = {this.updateState}/>
        <h4>{this.state.data}</h4>

        <hr/>       

        <input type = "text" value = {this.state.data} onChange = {this.updateState} ref="MyText"/>
        <h4>{this.state.data}</h4>
        <button onClick = {this.clearInput}>Clear</button>
      </div>
    );
  }
}

export default App;
