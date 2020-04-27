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

  let persons = null;

  if(personsState.showPerson){
    persons = (
      <div>
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age}
        />
        <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}>
        My Hobbies: Racing
        </Person>
        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age}
        />
      </div>
    )
  }

  return (
    <div className="App">
      <h1>This is my React App</h1>
      <button 
        style={style}
        onClick={() => togglePersonsHandler()}
      >
        Toggle Person
      </button>
      {persons}
    </div>
  )
}

export default App;
