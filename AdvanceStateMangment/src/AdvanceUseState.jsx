import React, { useState } from "react";


const AdvanceUseState = () => {
  const [num, setNum] = useState({ user: "goutham", age: 19 });
  const btnClicked = () => {
    const newNum = { ...num };//destructuring
    newNum.user = "preetham";
    setNum(newNum);
  };
  return <div>
      <h1>User: {num.user}</h1>   {/* add this */}
      <h1>Age: {num.age}</h1>     {/* add this */}
      <button onClick={btnClicked}>Change User</button>  {/* add this */}
  </div>;
};

export default AdvanceUseState;
