import React from "react";
import "./Card.css";
import "@fontsource/quicksand";

function Card({
  characters,
  image,
  name,
  status,
  species,
  location,
  origin,
  id,
  gender,
  episode,
}) {
  return (
    <div className="card animate__backInUp">
      <img className="card-image" src={image} alt={id} />
      <div className="card-text">
        <span className="status">- {status} -</span>
        <h2 className="name">{name}</h2>
        <p className="desc">
          {species} - {gender}</p>

        <p>{episode}</p>

        <p><b>Last known location: </b>{location}</p>

        <p><b>Origin:</b> {origin}</p>

        <p><b>First seen in:</b> {episode}</p>
      </div>
    </div>
  );
}

export default Card;
