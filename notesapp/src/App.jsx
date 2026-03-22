import React, { useState } from "react";

const App = () => {

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title,details);
    setTitle('')
    setDetails('')
  };



  return (
    <div className="min-h-screen bg-black text-white">
      <div className="add-notes text-white text-4xl p-3 font-bold">Add Notes</div>
      <form
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className="flex items-start gap-4 p-4 sm:p-6 md:p-10 justify-between"
      >
        <div className="flex w-full sm:w-2/3 md:w-1/2 items-start gap-4 flex-col">


        {/* pehla input for heading */}
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="p-3 sm:p-4 md:p-5 border-2 border-gray-600 bg-transparent text-white placeholder-gray-400 rounded-lg w-full focus:outline-none focus:border-white transition-colors duration-200"
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />

          {/* detailed vala input */}
          <textarea
            type="text"
            placeholder="Write Details"
            className="p-3 sm:p-4 md:p-5 h-32 sm:h-36 md:h-40 w-full border-2 border-gray-600 bg-transparent text-white placeholder-gray-400 rounded-lg flex flex-row items-start resize-none focus:outline-none focus:border-white transition-colors duration-200"
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
          />
          <button
            className="bg-white text-black font-semibold px-5 py-2 rounded-lg w-full hover:bg-gray-200 active:scale-95 transition-all duration-200"
          >
            Add Notes
          </button>
          <div className="Recent-notes font-bold text-4xl text-white p-3">Recent Notes</div>
        </div>
      </form>

      <div className="flex flex-wrap gap-4 p-4 sm:p-6 md:p-10">
        <div className="h-52 w-45 sm:h-36 sm:w-36 md:h-40 md:w-40 rounded-2xl bg-white hover:scale-105 transition-transform duration-200"></div>
        <div className="h-52 w-45 sm:h-36 sm:w-36 md:h-40 md:w-40 rounded-2xl bg-white hover:scale-105 transition-transform duration-200"></div>
      </div>
    </div>
  );
};

export default App;