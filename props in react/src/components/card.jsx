import React from "react";
import Pic from "../assets/img.jpg";

const Card = (props) => {
  console.log(props);
  return (
    <div>
      <div className="card">
        <img src={Pic} alt="profile" /> 
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View profile</button>
      </div>
    </div>
  );
};

export default Card;
