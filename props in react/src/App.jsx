import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card user="Preetham" />
      <Card user="Goutham" />
    </div>
  );
};

export default App;
