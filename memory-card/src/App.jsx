import React, { useEffect, useState } from "react";
import Gameheader from "./components/Gameheader";
import Card from "./components/Card";

const cardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍓",
  "🍍",
  "🥝",
  "🍒",
  "🍑",
  "🍎",
  "🍌",
  "🍇",
  "🍓",
  "🍍",
  "🥝",
  "🍒",
  "🍑",
];

const App = () => {
  const [cards, setCards] = useState([]);
  const initializeGame = () => {
    setCards(cardValues.map((value, index) => {}));
  };
  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <div className="app">
      <Gameheader score={0} moves={0} />
      <div className="cards-grid">
        {cardValues.map((card) => {
          return <Card card={card} />;
        })}
      </div>
    </div>
  );
};

export default App;
