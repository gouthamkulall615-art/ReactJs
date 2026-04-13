import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Favorites from "./pages/favorite/Favorites";
import Details from "./pages/details/Details";

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100" >
      <div
        className="min-h-screen p-6
      "
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
