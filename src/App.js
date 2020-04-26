import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonState ] = useState({
    persons: [
      { name: 'Chi', age: 32 },
      { name: 'Khanh', age: 31},
      { name: 'Nhat', age: 4}
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = (newName) => {
    //DON'T DO THIS: personsState.persons[0].name = 'Chi Dang';
    setPersonState({persons: [
      { name: newName, age: 32 },
      { name: 'Khanh', age: 31},
      { name: 'Nhat', age: 4}
    ]});
  }

  return (
    <div className="App">
      <h1>This is my React App</h1>
      <button onClick={() => switchNameHandler('Abc')}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}
      />
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, 'New Name')}>
      My Hobbies: Racing
      </Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}
      />
    </div>
  )
}

export default App;
