import React from "react";
import "./Herosection.css";

const Herosection = () => {
  return (
    <>
      <div className="image-container">
        <img src="darrell-jonathan-F4jILIqxQlA-unsplash.jpg" alt="" />
      </div>
      <div className="overlay-content">
        <p>welcome to our restaurant</p>
        <a href="#booktable">
          <button>reseve your table today</button>
        </a>
      </div>
    </>
  );
};

export default Herosection;
