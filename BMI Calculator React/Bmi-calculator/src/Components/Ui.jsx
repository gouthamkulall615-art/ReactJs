import React, { useState } from "react";

const Ui = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("please enter a vaild weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("you are underweight");
        setColor("text-blue-500");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("you are a healthy weight person");
        setColor("text-green-500");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("you are overweight");
        setColor("text-yellow-500");
      } else {
        setMessage("you are obse");
        setColor("text-red-500");
      }
    }
  };

  const reload = () => {
    setWeight(0);
    setHeight(0);
    setBmi("");
    setMessage("");
    setColor("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-linear-to-t from-sky-500 to-indigo-500">
      <form
        onSubmit={handleSubmit}
        className=" bg-white flex flex-col justify-start items-start h-[60vh] w-[50vh] shadow-md rounded pt-6"
      >
        <h3 className="font-semibold text-2xl text-center w-full">
          BMI Calculator
        </h3>

        <div className="flex flex-col gap-2 pt-8 pl-6 items-start">
          <label className="text-sm font-medium text-gray-600">
            Weight (lbs)
          </label>
          <input
            className="px-4 w-64 py-3 border-2 rounded border-gray-400 outline-none text-sm text-left"
            type="number"
            placeholder="Enter Weight value"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 pt-2 pl-6 items-start">
          <label className="text-sm font-medium text-gray-600">
            Height (in)
          </label>
          <input
            className="px-4 w-64 py-3 border-2 rounded border-gray-400 outline-none text-sm text-left"
            type="number"
            placeholder="Enter Height value"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className="flex justify-center w-full items-center pt-8">
          <button
            className="bg-blue-500 text-white text-sm px-4 py-3 w-80 font-medium rounded cursor-pointer active:scale-95"
            type="submit"
          >
            Submit
          </button>
        </div>

        <div className="flex justify-center w-full items-center pt-2">
          <button
            className="bg-black text-white text-sm px-4 py-3 w-80 font-medium rounded cursor-pointer active:scale-95"
            onClick={reload}
            type="button"
          >
            Reload
          </button>
        </div>

        <div className="text-left w-full pt-5 px-9">
          <h4 className="font-medium text-lg">Your BMI is: {bmi}</h4>
          <h4 className={`font-medium text-sm  pt-4 text-center ${color}`}>
            {message}
          </h4>
        </div>
      </form>
    </div>
  );
};

export default Ui;
