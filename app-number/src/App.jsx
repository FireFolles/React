import React from 'react'
import './App.css'

import { initialState, reducer } from './revision'

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

   
   const handleClick = (e) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    dispatch({ type: 'ADD_NUMBER', payload: randomNumber })
   }

  return (
    <>
      
      <h1>Revision</h1>
      <div className="card">
        <button onClick={(handleClick)}>
          Generate Number entre 1 et 10
        </button>
        <p>
          {state.numbers.join(', ')}
        </p>
      </div>
      <button onClick={() => dispatch({ type: 'SHUFFLE_number' })}>Shuffle</button>
      
    </>
  )
}

export default App
