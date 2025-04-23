import React from "react";

const Card = ({imagepath,content}) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={imagepath} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
