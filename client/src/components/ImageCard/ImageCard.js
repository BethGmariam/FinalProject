import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={()=>props.imageClickedFn(props.id)}/>
    </div>
  </div>
);

export default ImageCard;
