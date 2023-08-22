import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
  const { title } = course
  return (
    <h1>
      {title}
    </h1>
  )
}

const Content = ({ course }) => {
  const { parts } = course;
  return (
    <>
      <Part part={parts[0].name} exercise={parts[0].exercises} />
      <Part part={parts[1].name} exercise={parts[1].exercises} />
      <Part part={parts[2].name} exercise={parts[2].exercises} />
    </>
  )
}

const Part = ({part, exercise}) => {
  return(
    <>
      <h2>
        {part} {exercise}
      </h2>
    </>
  )
}

const Total = ({ course }) => {
  const { parts } = course;
  return (
    <h3>
      Number of exercises { parts[0].exercises + parts[1].exercises + parts[2].exercises }
    </h3>
  )
}

const App = () => {
  const course = {
    title: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))