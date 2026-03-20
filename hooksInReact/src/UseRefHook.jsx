import React, {useState,useEffect,useRef} from 'react'

// useRef() | = "use Reference" Does not cause re-renders when its value changes.
//              When you want a component to "remember" some information,
//              but you don't want that information to trigger new renders.

//              1. Accessing/Interacting with DOM elements
//              2. Handling Focus, Animations, and Transitions
//              3. Managing Timers and Intervals

const UseRefHook = () => {
    let [number,setNumber]=useState(0)
    
  return (
    <div>
      <button onClick={handleclick}>Click me</button>
    </div>
  )
}

export default UseRefHook
