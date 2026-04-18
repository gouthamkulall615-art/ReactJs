import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div
          className=" text-2xl font-bold tracking-wide
        "
        >
          BRAND
        </div>

        <ul className="hidden md:flex gap-8 text-lg">
          <li className="hover:text-indigo-400 cursor-pointer">Home</li>
          <li className="hover:text-indigo-400 cursor-pointer">About</li>
          <li className="hover:text-indigo-400 cursor-pointer">Services</li>
          <li className="hover:text-indigo-400 cursor-pointer">Contact</li>
        </ul>

        <div className="hidden md:block">
          <button className="bg-indigo-500 px-4 py-2 rounded-xl hover:bg-indigo-600 transition duration-300">
            Login
          </button>
        </div>

        <div className="md:hidden">
          {open ? (
            <X
              size={28}
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            />
          ) : (
            <Menu
              size={28}
              onClick={() => setOpen(true)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-lg">
            <li className="hover:text-indigo-400 cursor-pointer">Home</li>
            <li className="hover:text-indigo-400 cursor-pointer">About</li>
            <li className="hover:text-indigo-400 cursor-pointer">Services</li>
            <li className="hover:text-indigo-400 cursor-pointer">Contact</li>
          </ul>
          <button className="mt-4 w-full bg-indigo-500 py-2 rounded-xl hover:bg-indigo-600 transition duration-300">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
