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
    otherState: 'some other value',
    showPerson: false
  });

  const switchNameHandler = (newName) => {
    //DON'T DO THIS: personsState.persons[0].name = 'Chi Dang';
    setPersonState({persons: [
      { name: newName, age: 32 },
      { name: 'Khanh', age: 31},
      { name: 'Nhat', age: 4}
    ]});
  }

  const nameChangeHandler = (event) => {
    setPersonState({persons: [
      { name: 'Chi', age: 32 },
      { name: event.target.value, age: 31},
      { name: 'Nhat', age: 4}
    ]});
  }

  const togglePersonsHandler = () => {
    const showPerson = personsState.showPerson
    setPersonState(prevState => ({
      ...prevState,
      showPerson: !showPerson
     }));

  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '2px solid blue',
    padding: '5px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>This is my React App</h1>
      <button 
        style={style}
        onClick={() => togglePersonsHandler()}
      >
        Toggle Person
      </button>
      {
        personsState.showPerson ?
        <div>
          <Person 
            name={personsState.persons[0].name} 
            age={personsState.persons[0].age}
          />
          <Person 
            name={personsState.persons[1].name} 
            age={personsState.persons[1].age}
            click={switchNameHandler.bind(this, 'New Name')}
            change={nameChangeHandler}>
          My Hobbies: Racing
          </Person>
          <Person 
            name={personsState.persons[2].name} 
            age={personsState.persons[2].age}
          />
        </div> : null
      }
    </div>
  )
}

export default App;
