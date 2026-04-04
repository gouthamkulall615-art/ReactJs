import React, { useState } from "react";

const App = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
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
      <div className="text">
        <h3>{colorType === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default App;
