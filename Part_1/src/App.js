import React from 'react'

const Hello = (props) => {
  return (
  <div>
    <p>Hello, {props.name}</p>
    <p>You are {props.age} years old</p>
  </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = "Tal"/>
      <Hello age = "27"/>
    </div>
  )
}

export default App