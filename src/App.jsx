import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const operators = [['+', 'add'], ['-', 'subtract'], ['*', 'multiply'], ['/', 'divide']]

  const btnHandler = (e) => {
    const name = e.target.value
    switch (name) {
      case 'add':
        setCount(count + 1)
        break;
      case 'subtract':
        setCount(count - 1)
        break;
      case 'multiply':
        setCount(count * count)
        break;
      case 'divide':
        setCount(count / 2)
        break;
      case 'clear':
        setCount(0)
        break;
      default:
        console.log('No operation found');
        break;
    }
  }

  return (
    <>
      <h1>React Counter App</h1>
      <div className='counter-container'>
        <div className="counter-screen"> 
          <h1>{count}</h1>
        </div>
        <div className="buttons">
          {operators.map((op) => <button key={op[1]} value={op[1]} className='btn' onClick={btnHandler} >{op[0]}</button> )}
          <button value={'clear'} onClick={btnHandler}>Clear</button>
        </div>
      </div>
    </>
  )
}

export default App
