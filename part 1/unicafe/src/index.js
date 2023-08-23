import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => <h1>Give feedback</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = ( {good, bad, neutral}) => {
  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <div>
        <p>
          No feedback given
        </p>
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticsLine text="Good :" value={good} />
        <StatisticsLine text="Neutral :" value={neutral} />
        <StatisticsLine text="Bad :" value={bad} />
        <StatisticsLine text="All :" value={bad + good + neutral} />
        <StatisticsLine text="Average :" value={(bad + good + neutral) / 3} />
        {console.log(good / (bad + neutral))}
        <StatisticsLine text="Positive :" value={(good / (bad + neutral + good) * 100 + "%")} />
      </tbody>
    </table>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <>
    <tr>
      <td>
      {text}
      {value}
      </td>
    </tr>
  </>
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





