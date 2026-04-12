import React, { useState } from "react";
import questions from "./components/Data";

const App = () => {
  let [index, setIndex] = useState(0);

  return (
    <div className="h-screen  flex flex-col justify-center items-center bg-gradient-to-r from-blue-200 to-cyan-200  ">
      <div className="bg-white h-[70vh] w-[60vw] rounded  p-4 box">
        <div className="title  h-12 text-left text-slate-900 font-semibold text-2xl mt-3 pl-3">
          Quiz App
        </div>
        <hr className="border border-gray-300 " />

        <div className="question ">
          <h2 className="text-xl">
            {index + 1}. {questions[index].question}
          </h2>
        </div>
        <div className="options   ">
          <ul className="flex flex-col gap-7 p-2">
            <li
              className="border p-3 rounded border-gray-500 cursor-pointer text-lg 
            active:scale-95  "
            >
              {questions[index].option1}
            </li>
            <li className="border p-3 rounded border-gray-500 cursor-pointer text-lg    active:scale-95 ">
              {questions[index].option2}
            </li>
            <li className="border p-3 rounded border-gray-500 cursor-pointer text-lg    active:scale-95 ">
              LAN {questions[index].option3}
            </li>
            <li className="border p-3 rounded border-gray-500 cursor-pointer text-lg   active:scale-95   ">
              Pen {questions[index].option4}
            </li>
          </ul>
        </div>
        <div className="text-center p-4">
          <button
            className="bg-purple-700 px-4 py-1 text-white rounded cursor-pointer"
            onClick={() => setIndex(index + 1)}
          >
            NEXT
          </button>
        </div>
        <div className="text-center text-gray-500">
          <h3>
            {index + 1} out of {questions.length}questions
          </h3>
        </div>
      </div>
    </div>
  );
};

export default App;
