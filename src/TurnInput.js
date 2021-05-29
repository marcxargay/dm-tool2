import React from 'react'
import { useState } from 'react'

const TurnInput = ({ name }) => {

  const [roll, setRoll] = useState('')

  return (
    <div>
      <label forHtml="roll">
        {name}
        <input 
          id="roll"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />
      </label>
    </div>
  )
}

export default TurnInput