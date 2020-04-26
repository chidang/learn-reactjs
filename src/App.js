import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
function App() {
  return (
    <div className="App">
      <Person name="Chi" age="30"/>
      <Person name="Khanh" age="29">My Hobbies: Racing</Person>
      <Person name="Nhat" age="3"/>
    </div>
  );
}

export default App;
