import React, { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/phonebook'

const PersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => (
  <form onSubmit={addPerson}>
    <div>
      name: <input
        value={newName}
        onChange={handleNameChange}
      />
    </div>
    <div>
      number: <input
        value={newNumber}
        onChange={handleNumberChange}
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

const Persons = ({ persons, deletePerson }) => (
  <ul>
    {persons.map((person) => (
      <li 
        key={person.id}>{person.name} {person.number}
        <button onClick={deletePerson(person.id, person.name)}>{'  Delete'}</button>
        
        
      </li>
      
    ))}
  </ul>
)

const Notification = ({ message }) => {
  const NotificationStyle = {
    color: 'black',
    fontFamily: 'Arial, sans-serif',
    fontSize: 30,
    display: "flex",
    fontWeight: 'bold',
    height: 20,
    width: 300,
    boxShadow: "0 0 3px 2px #cec7c759",
    alignItems: "center",
    padding: 20,
    borderRadius: 20
  
  }
  if (message === null) {
    return null
  }

  return (
    <div style={NotificationStyle}>
      {message}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialContacts => {setPersons(initialContacts)})
    }, [])


  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
      return
    }
    const personObject = {
      name: newName,
      number: newNumber
    }
    personService
      .addPerson(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setNotificationMessage(`Person ${personObject.name} added`)
      })
    }
    
  const deletePerson = (id, name) => { return() =>{
    if (window.confirm('Are you sure you want to delete this person?')){
      console.log('tejltjls',id)
      personService
        .deletePerson(id)          
        .then(() => {
          setNotificationMessage(`Person ${name} deleted`)
          setPersons(persons.filter(n => n.id !== id))
          setNewName("")
          setNewNumber("")
          
        })
        console.log(id)
    }

  }
    


  }


  const handleNameChange = event => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const personsToShow = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons



  return (

    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={filter} onChange={handleFilterChange} />
      </div>
      <div>
        <Notification message={notificationMessage}/>
      </div>
      <h3>add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App
