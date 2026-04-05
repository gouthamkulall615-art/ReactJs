import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const App = () => {
  const [hovered, setHovered] = useState(-1);
  const [selected, setSelected] = useState(-1);
  return (
    <div style={{ display: "flex", gap: "5px", justifyContent: "center" }}>
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          key={index}
          size={30}
          color={
            index <= (hovered !== -1 ? hovered : selected) ? "#FFD700" : "#000"
          }
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(-1)}
          onClick={() => setSelected(index)}
        />
      ))}
    </div>
  );
};

export default App;
