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
        {
          personsState.persons.map(person => {
            return <Person 
              name={person.name} 
              age={person.age} />
          })
        }
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
