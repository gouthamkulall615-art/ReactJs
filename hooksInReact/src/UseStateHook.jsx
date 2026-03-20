import React, { useState } from "react";

const UseStateHook = () => {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);
  const updateName = () => {
    setName("goutham");
  };
  const updateAge = () => {
    setAge(19);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>setName</button>

      <p>Age: {age}</p>
      <button onClick={updateAge}>Age</button>

      <p>isEmployed: {isEmployed.toString()}</p>
      <button onClick={toggleEmployedStatus}>toogle status</button>
    </div>
  );
};

export default UseStateHook;
