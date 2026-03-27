import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();

  return (
    <div>
      <button
        onClick={()=>{
navigate('/')
        }}
        className="bg-emerald-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Return to Home Page
      </button>
      <button
        onClick={()=>{
          navigate(-1)
        }}
        className="bg-emerald-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
      Back
      </button>
      <h2>This is about page</h2>
    </div>
  );
};

export default About;
