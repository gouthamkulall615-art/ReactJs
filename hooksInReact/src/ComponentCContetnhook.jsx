import React, { useContext } from "react";
import { userContext } from "./componentAContetnhook";
import ComponentDContetnhook from './ComponentDContetnhook'

const ComponentCContetnhook = () => {
  const user=useContext(userContext)
  return (
    <div className='box'>
      <h1>Component C</h1>
    <h2>{`hello again ${user}`}</h2>
      <ComponentDContetnhook />
    </div>
  )
}

export default ComponentCContetnhook 
