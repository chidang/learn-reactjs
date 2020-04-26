import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Chi', age: 32 },
      { name: 'Khanh', age: 31},
      { name: 'Nhat', age: 4}
    ]
  }

  render () {
    return (
      <div className="App">
        <h1>This is my React App</h1>
        <button className="">Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    )
  }
}

export default App;
