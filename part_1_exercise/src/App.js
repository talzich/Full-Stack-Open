import React, {useState} from 'react'


const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)

  const decrement = () => setCounter(counter - 1)
  const increment = () => setCounter(counter + 1)
  const reset = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={decrement} text='minus'/>
      <Button onClick={reset} text='zero'/>
      <Button onClick={increment} text='plus'/>
    </div>
  )
}

export default App