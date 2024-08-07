import axios from 'axios'
const baseUrl = 'http://localhost:3002/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const addPerson = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const updatePerson = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deletePerson = (id) => {
    
    const request = axios.delete(`${baseUrl}/${id}`)
    console.log(request.then(response => response.data))
    return request.then(response => response.data)
}

export default {getAll, addPerson, updatePerson, deletePerson}