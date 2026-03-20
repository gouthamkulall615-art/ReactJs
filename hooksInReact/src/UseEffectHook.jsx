import React, {use, useEffect,useState} from 'react'

{/*1.useEffect(()=>{})  runs after every re-render
    2.useEffect(()=>{},[])  runs only on mount
    3.useEffect(()=>{}.[value])  runs on mount+when value changes
    
    */}

const UseEffectHook = () => {
    const [count,setCount]=useState(0);

    const [color,setColor]=useState("green")
useEffect(()=>{
    document.title=`count:${count} ${color}`

},[count,color])

    function addCount(){
        setCount(c=>c+1)
    }
    function changeColor(){
        setColor(c=> c=="green"? "red":"green")
    }
  return (
    <div>
      <p style={{color:color}}>Count:{count}</p>
      <button onClick={addCount}>Add</button><br />
      <button onClick={changeColor}>Change color</button>
    </div>
  )
}

export default UseEffectHook
