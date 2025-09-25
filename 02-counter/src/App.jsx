import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15) // hooks in react 

  //let counter = 15 // this will not reflect in UI

  const addValue = () => {
   
    //counter = counter + 1; // this will not reflect in UI
    setCounter(counter + 1); // this will reflect in UI


    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1); 

  }

  return (
    <>
      <h1>Chai aur react </h1>
      <h2>Counter value : { counter }</h2>

      <button
      onClick = {addValue}>Add value : {counter }</button>
      <button
      onClick = {removeValue}>remove value {counter }</button>
    </>
  )
}

export default App
