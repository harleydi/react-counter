import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [starHolder, setStarHolder] = useState([])

  

  const add = () => {
    setCount(count + 1)
    if (count >= 0) {
      setStarHolder([...starHolder, '*'])
      console.log(starHolder)
    }
  }

  const sub = () => {
    setCount(count - 1)
    starHolder.pop()
    console.log(starHolder)
  }

  

  return (
    <>
      <h1>React Counter App</h1>
      <div className='counter-container'>
        <button className='funcBtn' id='add' onClick={add}>+</button>
        <div className="counter-screen">
          <h1>{count}</h1>
        </div>
        <button className='funcBtn' id='sub' onClick={sub}>-</button>
      </div>
      <div className="stars">
        {starHolder.map((star, idx) => <button key={idx} className='btn'>{star}</button>)}
      </div>
    </>
  )
}

export default App
