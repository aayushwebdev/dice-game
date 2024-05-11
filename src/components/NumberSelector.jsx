import React from 'react'

const NumberSelector = (props) => {
    
  const arrNumber = [1,2,3,4,5,6];

  const numberSelectorHandler = (value) => {
    props.setSelectedNumber(value)
    props.setError("")
  }

  const selectedBoxStyle = {
    color: "white",
    backgroundColor: "black"
  }

  return (
    <div className='numberContainer'>
      <p className='error'>{props.error}</p>
        <div className='numberArray'>
            {arrNumber.map((value, i) => {
                return <div 
                className='box' 
                key={i} 
                onClick={() => numberSelectorHandler(value) }
                style={value === props.selectedNumber ? selectedBoxStyle : null}>{value}</div>
            })}
        </div>
        <p>Select Number</p>
    </div>
  )
}

export default NumberSelector