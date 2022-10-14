import React from "react";
import "./Card.css";

function Card({image, name, status, species, location, dimension,id,gender}) {
  return (
    <div class="card">
      <img
        className="card-image"
        src={image}
      />
      <div class="card-text">
        <span class="status">{status}</span>
        <h2 className="name">{name}</h2>
        <p className="desc">
          {species} - {gender}
        </p>
      </div>
      <div class="card-stats">
        <div class="stat">
          <div class="value">
            ****
          </div>
          <div class="type">{dimension}</div>
        </div>
        <div class="stat border">
          <div class="value">****</div>
          <div class="type">{location}</div>
        </div>
        <div class="stat">
          <div class="value">32</div>
          <div class="type">{id}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
