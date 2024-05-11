import React from 'react'
import Dices from '../assets/dices.png'

const StartGame = (props) => {
  return (
    <>
        <div className='startGame'>
            <div>
                <img src={Dices} alt='' />
            </div>
            <div className='content'>
                <h1>DICE GAME</h1>
                <button onClick={props.click} className='btn'>Play Now</button>
            </div>
        </div>
    </>
  )
}

export default StartGame