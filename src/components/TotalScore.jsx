import React from 'react'

const TotalScore = (props) => {
  return (
    <>
        <div className='scoreContainer'>
            <h1>{props.score}</h1>
            <p>TotalScore</p>
        </div>
    </>
  )
}

export default TotalScore