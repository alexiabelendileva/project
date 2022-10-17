import React from "react";
import "./Card.css";

function Card({characters, image, name, status, species, location, origin ,id,gender, episode}) {
  return (
    <div className="card">
      <img
        className="card-image"
        src={image}
      />
      <div className="card-text">
        <span className="status">{status}</span>
        <h2 className="name">{name}</h2>
        <p className="desc">
          {species} - {gender}
          {episode}
        </p>
      </div>
    </div>
  );
}

export default Card;
