import React, { useContext } from "react";
import { userContext } from "./componentAContetnhook";

const ComponentDContetnhook = () => {
  const user = useContext(userContext);
  return (
    <div className="box">
      <h1>Component D</h1>
      <h2>{`bye ${user}`}</h2>
    </div>
  );
};

export default ComponentDContetnhook;
