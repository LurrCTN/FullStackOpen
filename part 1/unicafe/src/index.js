import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => <h1>Give feedback</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = (props) => {
  console.log(props)
  const {good, bad, neutral} = props
  return (
    <div>
      <p>
        good {good}
      </p>
      <p>
        neutral {neutral}
      </p>
      <p>
        bad {bad}
      </p>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleBad = () => setBad(bad + 1)
  const handleNeutral = () => setNeutral(neutral + 1)

  return (
    <div>
      <Title />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

let counter = 1
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App counter={counter} />)





