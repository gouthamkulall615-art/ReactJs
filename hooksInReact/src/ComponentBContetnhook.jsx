import React from 'react'
import ComponentCContetnhook from './ComponentCContetnhook'

const ComponentBContetnhook = () => {
  return (
    <div className='box'>
      <h1>Component B</h1>
      <ComponentCContetnhook />
    </div>
  )
}

export default ComponentBContetnhook 
