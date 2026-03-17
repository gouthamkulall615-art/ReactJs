import React from "react";
import { Bookmark } from "lucide-react";

const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp9N4xVhTeIAqjpcClsaqmOyI1d_rewOkLxg&s"
            alt=""
          />
          <button>
            Save <Bookmark size={12} />
          </button>
        </div>
        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>
          </h3>
          <h2>Senior UI/UX Designer</h2>
          <div className="center-border">
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div className="price-wrapper">
            <h3>$120/hr</h3>
            <p>Mumbai,India</p>
          </div>
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default App;
