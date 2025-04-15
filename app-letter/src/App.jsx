
import './App.css'
import React from 'react'

import { initialState, reducer } from './Letter'
function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [letter, setLetter] = React.useState('')
  

  const handleChange = (e) => {
    e.target.value = e.target.value.toUpperCase()
    setLetter(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!state.letters.includes(letter)) {
      dispatch({ type: 'ADD_LETTER', payload: letter })
    } else {
      alert(`Le nombre ${letter} existe déjà !`)
    }


    
    setLetter('')
  }


  return (
    <>
      
      <div className="card">
      <h1>Revision</h1>
      <form className="pt-3" onSubmit={handleSubmit} >
        <p><input onChange={handleChange} type="text" value={letter} name="letter" maxlength="1"/></p>
        <div class="d-grid gap-2 col-6">
          <button className="btn btn-light" type="submit" disabled={letter.length !== 1}>ADD</button>
        </div>
      </form>
        <p>
          {state.letters.join(' , ')}
        </p>
      </div>
      <button onClick={() => dispatch({ type: 'SHUFFLE_LETTER' })}>Shuffle</button>
    </>
  )
}

export default App
