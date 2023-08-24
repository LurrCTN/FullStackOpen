import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client"

const Title = ({text}) => {
  return (
    <h1>
      {text}
    </h1>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Message = ({text}) => {
  return (
    <p>
      {text}
    </p>
  )
}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [selectedVote, setSelectedVote] = useState(0)

  const handleRandomAnecdote = () => {
    const random = () => {
      return Math.floor(Math.random() * anecdotes.length)
    }
    setSelected(random)
  }

  const handleNextAnecdote = () => {
    if (selected >= anecdotes.length - 1){
      console.log("reset ", selected)
      setSelected(0)
      return
    }
    setSelected(selected + 1)
  }

  const handleVotes = () => {
      setSelectedVote(votes[selected] += 1)
    }

    const hasMoreVotes = () => {
      let moreVoted = 0; 
      for (let i = 0; i < anecdotes.length; i++) {
        if (votes[i] > votes[moreVoted]) {
          console.log("El más votado tiene el índice ", i);
          moreVoted = i;
        }
      }
    
      return anecdotes[moreVoted];
    };

  return (
    <div>
      <Title text="Anecdote of the day" />
      <Message text={props.anecdotes[selected]} />
      <div>
      has {selectedVote} votes
      </div>
      <Button handleClick={handleVotes} text="vote" />
      <Button handleClick={handleNextAnecdote} text="Next anecdote" />
      <Button handleClick={handleRandomAnecdote} text="Random anecdote" />
      <Title text="Anecdote with most votes" />
      <Message text={hasMoreVotes()}/>
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