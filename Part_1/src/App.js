import React from 'react'
  
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const yearNow = new Date().getFullYear();
  const birth_year = 1994;
  const age = yearNow - 1994;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="zich" age={age}/>
    </div>
  )
}

export default App