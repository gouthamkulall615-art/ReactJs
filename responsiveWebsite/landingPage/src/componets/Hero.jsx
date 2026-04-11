import React, { useEffect, useState } from "react";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handleMouseMove(e) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <section className="realtive min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 "
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px,rgba(59,130,246,0.4),transparent 40%)`,
        }}
      ></div>
    </section>
  );
};

export default Hero;
