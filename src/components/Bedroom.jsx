import React from 'react'

const Bedroom = ({num}) => {
  return (
    <div id={`room${num}`}>
        <h2>Bedroom {num}</h2>
    </div>
  )
}

export default Bedroom