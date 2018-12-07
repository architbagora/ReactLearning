import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.headerText}</h1>
        <h2>{this.props.contentText}</h2>


        
        <h3>Hello {this.props.name}</h3>
        <h3>Hello {this.props.propArray}</h3>
        <h3>Hello {this.props.propBool ? "True" : "False"}</h3>
        <h3>Hello {this.props.propFunc(3)}</h3>
        <h3>Hello {this.props.propNumber}</h3>
        <h3>Hello {this.props.propString}</h3>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc:PropTypes.func,
  propNumber:PropTypes.number,
  propString: PropTypes.string,
}

App.defaultProps = {
  name: 'archit bagora',
  propArray: [1,2,3,4,5],
  propFunc: function(e){
    return e;
  },
  propNumber: 1,
  propString: 'String Default value'
}

export default App;
