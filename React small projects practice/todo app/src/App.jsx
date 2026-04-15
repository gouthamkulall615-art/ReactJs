import React, { useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("tasks"))||[]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  function addTask() {
    const tasks = [...taskList, value];
    setTaskList(tasks);
    setValue("");
  }
  function deleteTask(index) {
    setTaskList(
      taskList.filter((item, i) => {
        return i !== index;
      }),
    );
  }
  return (
    <div className="min-h-screen bg-slate-900  text-white flex flex-col items-center">
      <div className="title  p-4">
        <span className="text-3xl font-medium ">Todo</span>
        <span className="text-indigo-500 font-medium text-3xl">App</span>
      </div>
      <div className=" p-4 flex gap-6 w-full md:w-[50vw]">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Enter your task"
          className="border border-gray-400 p-2 rounded w-[50vw] focus:border-indigo-500 outline-none duration-300"
        />
        <span className="text-lg font-medium bg-indigo-500 hover:bg-white hover:text-indigo-400 duration-300 active:scale-95 p-3 rounded-2xl">
          <button className="cursor-pointer " onClick={() => addTask()}>
            ADD
          </button>
        </span>
      </div>
      <div className="flex flex-col   gap-4 p-4 w-full md:w-[50vw]">
        {taskList.map((task, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center bg-white text-indigo-500 px-5 py-3 rounded-xl shadow-md"
            >
              <span className="text-base font-medium">{task}</span>

              <button
                className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 active:scale-95 transition "
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
