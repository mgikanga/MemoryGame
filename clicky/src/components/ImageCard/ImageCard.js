import React from "react";
import "./ImageCard.css";

const ImageCard = (props) => (
  <div className="card">
    <div className="img-container">
      <img
        alt="take a guess"
        src={props.image}
      />
    </div>
    <div className="content">
      <p> Click Me! </p>
    </div>
  </div>
);

export default ImageCard;