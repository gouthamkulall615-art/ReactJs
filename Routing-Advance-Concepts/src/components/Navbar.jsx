import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex px-8 py-4 bg-cyan-700 justify-between items-center">
      <h3 className="text-xl font-bold">Goutham</h3>
      <div className="flex gap-8">
        <Link className="text-xl font-bold" to="/">Home</Link>
        <Link className="text-xl font-bold" to="/about">About</Link>
        <Link className="text-xl font-bold" to="/coursest">Courses</Link>
        <Link className="text-xl font-bold" to="/product">Product</Link>
      </div>
    </div>
  );
};

export default Navbar;