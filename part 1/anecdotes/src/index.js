import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client"

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [selectedVote, setSelectedVote] = useState(0)

  const handleAnecdote = () => {
    const random = () => {
      return Math.floor(Math.random() * anecdotes.length)
    }
    setSelected(random)
  }

  const handleVotes = () => setSelectedVote(votes[selected]++)

  return (
    <div>
      <div>
      {props.anecdotes[selected]}
      </div>
      has {selectedVote} votes
      <div>
      </div>
      <Button handleClick={handleVotes} text="vote" />
      <Button handleClick={handleAnecdote} text="next anecdote" />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const votes = new Uint8Array(anecdotes.length)

const root = createRoot(document.getElementById('root'));
root.render( <App anecdotes={anecdotes} />)