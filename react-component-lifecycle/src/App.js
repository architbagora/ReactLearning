import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this)
  };
  setNewNumber(){
    this.setState({data : this.state.data + 1})
  }
  render() {
    return (
      <div >
       <button onClick = {this.setNewNumber}>Increment</button>
       <Content myNumber = {this.state.data}></Content>
      </div>
    );
  }
}

class Content extends React.Component {
  componentWillMount(){
    console.log('Component WILL mount !')
  }
  componentDidMount(){
    console.log('Component DID mount !')
  }
  componentWillReceiveProps(newProps){
    console.log('Component WIll RECIEVE PROPS mount !' + newProps);
  }
  shouldComponentUpdate(newProps , newState){
    return true;
  }
  componentWillUpdate(nextProps, prevState){
    console.log("component WILL UPDATE");
  }
  componentDidUpdate(prevProps, prevState){
    console.log("component DID UPDATE");
  }
  componentWillUnmount(){
    console.log('Component WILL UNMOUNT');
  }
  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    )
  }


}

export default App;
