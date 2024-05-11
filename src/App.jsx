// import React from 'react'
import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  function toggleGamePlay() {
    setIsGameStarted(true)
  }

  return (
    <>
      {isGameStarted ? <GamePlay/> : <StartGame click={toggleGamePlay} />}
    </>
  )
}

export default App
