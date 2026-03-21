import React, { useState } from "react";
import AdvanceUseState from "./AdvanceUseState";

const App = () => {
  const [num, setnum] = useState(0);
  function increaseNum() {
    setnum(num + 1);
  }
  function decreasenum() {
    setnum(num - 1);
  }
  function jumpfivenum(){
    setnum(num+5);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreasenum}>decrease</button>
      <button onClick={jumpfivenum}>Jump by 5</button>
     
    </div>
  );
};

export default App;
