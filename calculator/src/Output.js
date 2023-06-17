import React from 'react'
import { Consumer } from './Context'

const Output = () => {
  const {input ,output}=Consumer()
  return (
    <div className='output'>
       <p>{input}</p>
        <h1>{output}</h1>
    </div>
  )
}

export default Output