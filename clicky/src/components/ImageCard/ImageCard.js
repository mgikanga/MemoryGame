import React from "react";
import "./ImageCard.css";
import "./Counter.js";

const ImageCard = (props) => (
  <div className="card">
    <div className="img-container">
      <img onClick={props.onClick}
        alt="take a guess"
        src={props.image}
        id = {props.id}
      />
    </div>
    <div className="content">
      <p> Click Me! </p>
    </div>
  </div>
);

export default ImageCard;