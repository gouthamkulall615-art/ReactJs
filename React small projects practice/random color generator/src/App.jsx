import React, { useState } from "react";

const App = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000");

  function randomColorUtility(lenght) {
    return Math.floor(Math.random() * length);
  }

  function  handleCreateRandomRgbColor(){
    
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexcolor);
  }

  return (
    <div
      style={{
        background: color,
        height: "100vh",
        width: "100vw",
      }}
      className="container"
    >
      <button onClick={() => setColorType("hex")}>Create hex color</button>
      <button onClick={() => setColorType("rgb")}>Create RGB color</button>
      <button
        onClick={
          colorType === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        generate Random color
      </button>
    </div>
  );
};

export default App;
