import React, { useState } from 'react'

const Counter = () => {
  const [value, setValue] = useState(0)

  const onAdd = () => {
    setValue(value + 1)
  }
  const onMinus = () => {
    if (value === 0) {
      return
    }
    setValue(value - 1)
  }
  return (
    <div className={`counter ${value > 2 ? 'yellow' : 'red'}`}>
      <h1>{value}</h1>
      <button onClick={onAdd}>Increase+</button>
      <button onClick={onMinus}>Decrease-</button>
    </div>
  )
}

export default Counter
