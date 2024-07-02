import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '20202020'
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      <ul>
      {persons.map((person, index) => (
          <li key={index}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  )
}

export default App