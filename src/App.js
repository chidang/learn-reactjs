import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonState ] = useState({
    persons: [
      { id: 'a1', name: 'Chi', age: 32 },
      { id: 'a2', name: 'Khanh', age: 31},
      { id: 'a3', name: 'Nhat', age: 4}
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

  const deletePersonHandler = (personIndex) => {
    console.log(personIndex)
    const persons = personsState.persons;
    persons.splice(personIndex, 1);
    setPersonState(prevState => ({
      ...prevState,
      persons: persons
    }))
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
          personsState.persons.map((person, index) => {
            return <Person 
              key={person.id}
              click={(index) => deletePersonHandler(index)}
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
