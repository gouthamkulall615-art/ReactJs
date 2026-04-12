import React, { useState } from "react";
import questions from "./components/Data";

const App = () => {
  let [index, setIndex] = useState(0);
  let [selected, setSelected] = useState("");
  let [score, setScore] = useState(0);
  let [finished, setFinished] = useState(null);

  const getOptionClass = (option) => {
    if (!selected) return "border border-gray-500";
    if (option === questions[index].answer)
      return "border-2 border-green-500 bg-green-100";
    if (option === selected) return "border-2 border-red-500 bg-red-100";
    return "border border-gray-500";
  };
  const handleReset = () => {
    setSelected("");
    setIndex(0);
    setScore(0);
    setFinished(false);
  };
  if (finished) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-200 to-cyan-200">
        <div className="bg-white w-[90vw] md:w[60vw] rounded p-8 text-center">
          <h2 className="text-purple-600 font-semibold text-xl">
            Quiz Completed
          </h2>
          <p className="mt-3 text-lg font-medium">
            Your Score :{score}/{questions.length}
          </p>
        </div>
        <div>
          <button
            className="bg-purple-600 text-white px-6 py-2 mt-3 rounded active:scale-105"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-200 to-cyan-200">
      <div className="bg-white w-[90vw] md:w-[60vw] h-auto md:h-[70vh] rounded p-4 box">
        <div className="title h-12 text-left text-slate-900 font-semibold text-2xl mt-3 pl-3">
          Quiz App
        </div>
        <hr className="border border-gray-300" />

        <div className="question">
          <h2 className="text-xl">
            {index + 1}. {questions[index].question}
          </h2>
        </div>

        <div className="options">
          <ul className="flex flex-col gap-3 md:gap-7 p-2">
            <li
              className={`p-3 rounded cursor-pointer text-lg active:scale-95 ${getOptionClass(questions[index].option1)}`}
              onClick={() => {
                if (!selected) setSelected(questions[index].option1);
                if (questions[index].option1 === questions[index].answer)
                  setScore(score + 1);
              }}
            >
              {questions[index].option1}
            </li>
            <li
              className={`p-3 rounded cursor-pointer text-lg active:scale-95 ${getOptionClass(questions[index].option2)}`}
              onClick={() => {
                if (!selected) setSelected(questions[index].option2);
                if (questions[index].option2 === questions[index].answer)
                  setScore(score + 1);
              }}
            >
              {questions[index].option2}
            </li>
            <li
              className={`p-3 rounded cursor-pointer text-lg active:scale-95 ${getOptionClass(questions[index].option3)}`}
              onClick={() => {
                if (!selected) setSelected(questions[index].option3);
                if (questions[index].option3 === questions[index].answer)
                  setScore(score + 1);
              }}
            >
              {questions[index].option3}
            </li>
            <li
              className={`p-3 rounded cursor-pointer text-lg active:scale-95 ${getOptionClass(questions[index].option4)}`}
              onClick={() => {
                if (!selected) setSelected(questions[index].option4);
                if (questions[index].option4 === questions[index].answer)
                  setScore(score + 1);
              }}
            >
              {questions[index].option4}
            </li>
          </ul>
        </div>

        <div className="text-center p-4">
          <button
            className="bg-purple-700 px-4 py-1 text-white rounded cursor-pointer active:scale-95"
            onClick={() => {
              if (index + 1 < questions.length) {
                setIndex(index + 1);
                setSelected("");
              } else {
                setFinished(true);
              }
            }}
          >
            NEXT
          </button>
        </div>

        <div className="text-center text-gray-500">
          <h3>
            {index + 1} out of {questions.length} questions
          </h3>
        </div>
      </div>
    </div>
  );
};

export default App;
