import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  const Persons=({persons}) => {return(
    <ul>
    {persons.map((person) => (
        <li key={person.number}>{person.name} {person.number}</li>
      ))}
    </ul>
  )}


  const PersonForm = (props) =>(
    
      <form onSubmit={props.onSubmit}>
      <div>
        name: <input 
        value={props.newName}
        onChange={props.handlePersonChange}/>
      </div>
      <div>
        number: <input
        value={props.newNumber}
        onChange={props.handleNumberChange}
        /></div>
      
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    
  )

  

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
      return
    }
    const personObject = {
      name: newName,
      number: newNumber}
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }
  const handlePersonChange = (event) => {console.log(event.target.value)  
    setNewName(event.target.value)  }
  const handleNumberChange = (event) => {console.log(event.target.value)  
    setNewNumber(event.target.value)  }
  const handleFilterChange = (event) => {console.log(event.target.value)  
    setFilter(event.target.value)  }

  const personsToShow = filter
  ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  : persons
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={filter} onChange={handleFilterChange} />
      </div>
           <form onSubmit={addPerson}>
      <div>
        name: <input 
        value={newName}
        onChange={handlePersonChange}/>
      </div>
      <div>
        number: <input
        value={newNumber}
        onChange={handleNumberChange}
        /></div>
      
      <div>
        <button type="submit">add</button>
      </div>
    </form>
      <h3>add a new</h3>
      <PersonForm 
        onSubmit={addPerson}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      
    </div>
  )
}

export default App