import React from 'react'
import Dice1 from "../assets/dice_1.png";
import Dice2 from "../assets/dice_2.png";
import Dice3 from "../assets/dice_3.png";
import Dice4 from "../assets/dice_4.png";
import Dice5 from "../assets/dice_5.png";
import Dice6 from "../assets/dice_6.png";

const RoleDice = (props) => {

    const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  return (
    <div className='roleDice'>
        <div className='dice' onClick={props.diceChange}>
            <img src={diceImages[props.currentDice - 1]} alt="" />
        </div>
        <p>Click on Dice to roll</p>
    </div>
  )
}

export default RoleDice;
