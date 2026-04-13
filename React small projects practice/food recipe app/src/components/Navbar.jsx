import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../Context/Context";

const Navbar = () => {
  const { searchParam, setSearchParam,handleSubmit } = useContext(GlobalContext);
  return (
    <nav className="bg-slate-900 border-b border-slate-800 rounded">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center py-6 gap-4 px-4">
        {/* Logo */}
        <NavLink to="/" className="text-3xl font-semibold tracking-tight">
          <span className="text-slate-100">Food</span>
          <span className="text-indigo-500">Recipe</span>
        </NavLink>

        {/* Search */}
        <form className="w-full lg:w-auto" onSubmit={handleSubmit}>
          <input
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
            type="text"
            placeholder="Search recipes..."
            className="w-full lg:w-80 bg-slate-900 border border-slate-700 
            focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 
            text-slate-200 placeholder-slate-400 
            px-5 py-2.5 rounded-xl outline-none transition"
          />
        </form>
        <ul className="flex gap-5 ">
          <li>
            <NavLink
              to={"/"}
              className="text-gray-400 hover:text-gray-100 duration-300 cursor-pointer active:scale-95"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favorites"}
              className="text-gray-400 hover:text-gray-100 duration-300 cursor-pointer active:scale-95"
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
