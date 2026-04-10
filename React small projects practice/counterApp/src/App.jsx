import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(counter + 1);
  }
  function handleDecrement() {
    if (counter === 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  }
  function handleReset() {
    setCounter(0);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="bg-white border border-gray-200 rounded-2xl p-10 flex flex-col items-center gap-8">
        <p className="text-xs text-gray-400 tracking-widest uppercase">
          Counter
        </p>

        <h1 className="text-8xl font-medium text-gray-900">{counter}</h1>

        <div className="flex gap-3">
          <button
            className="w-14 h-14 rounded-full border border-gray-200 bg-gray-50 text-2xl text-gray-800 hover:bg-gray-100 transition"
            onClick={handleDecrement}
          >
            −
          </button>
          <button
            className="w-14 h-14 rounded-xl border border-gray-200 bg-gray-50 text-xs text-gray-400 hover:bg-gray-100 transition"
            onClick={handleReset}
          >
            reset
          </button>
          <button
            className="w-14 h-14 rounded-full border border-gray-200 bg-gray-50 text-2xl text-gray-800 hover:bg-gray-100 transition"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
