import React from 'react'
import { Bookmark } from "lucide-react";


const Card = (props) => {
    console.log(props)
  return (
     <div className="card">
        <div className="top">
            <div className="logo">
          <img
            src={props.logo}
            alt=""
          />
          </div>
          <button>
            Save <Bookmark size={12} />
          </button>
        </div>
        <div className="center">
          <h3>
            {props.company} <span>{props.dataPosted}</span>
          </h3>
          <h2>{props.role}</h2>
          <div className="center-border">
            <h4>{props.type}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>
        <div className="bottom">
          <div className="price-wrapper">
            <h3>{props.salary}</h3>
            <p>{props.location}</p>
          </div>
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
  )
}

export default Card
