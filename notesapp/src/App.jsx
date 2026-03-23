import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    setTitle("");
    setDetails("");
  };

  const deleteHandler = (idx) => {
    setTask(task.filter((_, i) => i !== idx));
  };

  const stickyColors = [
    "#FEFF9C",
    "#FF7EB9",
    "#7AFCFF",
    "#FEFF9C",
    "#BAFF7A",
    "#FFD700",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="add-notes text-white text-4xl p-3 font-bold">
        Add Notes
      </div>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex items-start gap-4 p-4 sm:p-6 md:p-10 justify-between"
      >
        <div className="flex w-full sm:w-2/3 md:w-1/2 items-start gap-4 flex-col">
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="p-3 sm:p-4 md:p-5 border-2 border-gray-600 bg-transparent text-white placeholder-gray-400 rounded-lg w-full focus:outline-none focus:border-white transition-colors duration-200"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Write Details"
            className="p-3 sm:p-4 md:p-5 h-32 sm:h-36 md:h-40 w-full border-2 border-gray-600 bg-transparent text-white placeholder-gray-400 rounded-lg flex flex-row items-start resize-none focus:outline-none focus:border-white transition-colors duration-200"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <button className="bg-white text-black font-semibold px-5 py-2 rounded-lg w-full hover:bg-gray-200 active:scale-95 transition-all duration-200">
            Add Notes
          </button>
          <div className="Recent-notes font-bold text-4xl text-white p-3">
            Recent Notes
          </div>
        </div>
      </form>

      <div className="flex flex-wrap gap-4 p-4 sm:p-6 md:p-10">
        {task.map(function (ele, idx) {
          return (
            <div
              key={idx}
              style={{
                backgroundColor: stickyColors[idx % stickyColors.length],
                boxShadow:
                  "3px 3px 10px rgba(0,0,0,0.4), inset -3px -3px 8px rgba(0,0,0,0.08)",
              }}
              className="relative h-52 w-40 rounded-xl text-black px-6 py-7"
            >
              <button
                onClick={() => deleteHandler(idx)}
                className="absolute top-2 right-2 bg-red-500 text-xs p-1 rounded-full hover:bg-red-600 active:scale-95 transition-all duration-200"
              >
                <X color="#fafafa" size={14} strokeWidth={2.75} />
              </button>
              <h3 className="leading-tight text-xl font-bold">{ele.title}</h3>
              <p className="mt-2 leading-tight font-medium">{ele.details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;