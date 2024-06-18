import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const getRandomNumber = (max) => Math.floor(Math.random() * max)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNextAnecdoteClick = () => {
    const randomIndex = getRandomNumber(anecdotes.length)
    setSelected(randomIndex)
    console.log(anecdotes[randomIndex])
  }

  const handleVoteClick = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const anecdoteWithMostVotes = () => {
    let maxVotes = -1;
    let maxIndex = 0;
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > maxVotes) {
        maxVotes = votes[i];
        maxIndex = i;
      }
    }
    return maxIndex;
  };
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Button handleClick={handleNextAnecdoteClick} text={"Next"}/>
      <p>{anecdotes[selected]}</p>
      <Button handleClick={handleVoteClick} text="Vote" />
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[anecdoteWithMostVotes()]}</p>

    </div>
  )
}

export default App