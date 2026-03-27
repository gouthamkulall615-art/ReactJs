import React, { createContext } from 'react'

export const ThemeDataContext=createContext();

const ThemContext = (props) => {

  return (
    <div>
   <ThemeDataContext.Provider value='sarthak'>
    {props.children}
   </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemContext
