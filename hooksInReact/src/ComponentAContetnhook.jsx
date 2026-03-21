import React, { useState, createContext } from 'react'
import ComponentBContetnhook from './ComponentBContetnhook'

export const userContext=createContext();
const ComponentAContetnhook = () => {

  const [user,setUser]=useState("goutham")
  return (
    <div className='box'>
      <h1>Component A</h1>
      <h2>{`hello ${user}`}</h2>
      <userContext.Provider value={user}>
    <ComponentBContetnhook user={user} />
      </userContext.Provider>
  
    </div>
  )
}

export default ComponentAContetnhook 
