import React from "react";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <form className="flex items-start  gap-4 p-10 justify-between">
        <div className="flex w-1/2 items-start  gap-4 flex-col">
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="p-5  border-2 rounded w-full"
          />
          <textarea
            type="text"
            placeholder="Write Details"
            className="p-5 h-40 w-full py-2 border-2 rounded flex flex-row items-start"
          />
          <button
            className="bg-white text-black
       px-5 py-2 roudned w-full "
          >
            Add Notes
          </button>
        </div>
      
      </form>
    </div>
  );
};

export default App;
