import React from "react";
import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import Features from "./componets/Features";
import Pricing from "./componets/Pricing";
import Testimonal from "./componets/Testimonal";
import Footer from "./componets/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 overflow-hidden text-white">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonal />
      <Footer />
    </div>
  );
};

export default App;
