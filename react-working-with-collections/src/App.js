import React, { Component } from 'react';
import './App.css';
import Emp from'./Emp';

class App extends Component {
  state = {
    emps :[
      {id:101 , name:'Archit', salary:5000},
      {id:102 , name:'Rajo', salary:15000}
    ]
  }

  delEmp = (index , e)=> {
    const copyEmps = Object.assign([] , this.state.emps);
    copyEmps.splice(index,1);
    this.setState({emps:copyEmps});
  }

  render() {
    return (
      <div>
        <table style= {{width: '500px' , color: 'blue'}}>
          <tbody>
            {
              this.state.emps.map((emp) => {
                return (<Emp salary={emp.salary} key={emp.id} 
                  deleteEvent={this.delEmp.bind(this, id)}>{emp.name}</Emp>)
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
