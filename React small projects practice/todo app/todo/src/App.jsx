import React, { useState } from "react";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleAdd() {
    if (!newItem.trim()) return; // don't add empty tasks
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);
    setNewItem(""); // clear input after adding
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      }),
    );
  }
  function deleteTodo(id) {
    setTodos((currentTodos) => {
     return currentTodos.filter((todo) => {
        if (todo.id !== id) {
         
        }
      });
    });
  }

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4 bg-blue-500 w-[60%] rounded-2xl p-8"
      >
        <div className="text-3xl text-white font-bold">Todo List</div>

        <div className="flex gap-2">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Enter your New Task"
            className="bg-white mx-2.5 p-1.5 outline-none rounded w-[90%] text-black"
          />
          <button
            onClick={handleAdd}
            className="bg-amber-500 p-3 rounded text-white font-bold cursor-pointer active:scale-95"
          >
            ADD
          </button>
        </div>

        <div className="font-bold text-amber-50 text-lg px-2 py-2.5">
          Your Todo List
        </div>

        <div className="tasks flex flex-col gap-4">
          {todos.map((todo) => (
            <div key={todo.id} className="flex items-center gap-4">
              <input
                type="checkbox"
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                className="w-4 h-4 accent-amber-400 cursor-pointer"
              />
              <div
                className={`border-2 border-gray-400 w-[65%] p-2 font-semibold text-white ${todo.completed ? "line-through opacity-50" : ""} `}
              >
                {todo.title}
              </div>
              <button
                className="bg-red-400 active:scale-95 cursor-pointer px-2 py-2.5 rounded text-white"
                onClick={()=>deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default App;
