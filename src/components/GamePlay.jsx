import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import Rules from './Rules'

const GamePlay = () => {

  const [score, setScore] = useState(0)
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState()
  const [error, setError] = useState("")
  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const diceChange = () => {
        const randomNumber = generateRandomNumber(1,6);
        setCurrentDice((prev) => randomNumber);

        if(!selectedNumber) {
            setError("You have not selected any number")
            return
        }
        setError("")

        if(selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber)
        }else {
            setScore((prev) => prev - 2)
        }

        setSelectedNumber(undefined)
    }

    const reset = () => {
        setScore(0);
    }


  return (
    <main>
        <div className='topSection'>
            <TotalScore score={score} />
            <NumberSelector 
                error={error}
                setError={setError}
                selectedNumber={selectedNumber}
                setSelectedNumber={setSelectedNumber}
            />
        </div>
        <RoleDice 
            currentDice={currentDice}
            diceChange={diceChange}
        />
        <div className='btns'>
            <button onClick={reset} className='btn btn-white'>Reset Score</button>
            <button className='btn' onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</button>
        </div>
        {showRules && <Rules/>}
    </main>
  )
}

export default GamePlay