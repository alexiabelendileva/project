import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./CardCont.css";
import Loading from "./Loading";

function CardCont() {
  const [characters, setCharacters] = useState([]);
  const initialUrl = "https://rickandmortyapi.com/api/character";

  // para montar el componente se ejecuta el  fetch
  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results,data.location))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    setTimeout(() => {
      fetchCharacters(initialUrl);
    }, 2000);
  }, []); //sin los corchetes se renderizan constantemente si hay cambio de props o cambio de estado, ya que afectaría la performance de la aplicación

  return (
    <div className="cont">
      <div className="contenedor">
        {characters.length !== 0 ? characters.map((item,index) => (
          <Card key={index} image={item.image} name={item.name} status={item.status} species={item.species}  id={item.id} gender={item.gender}/>)) : <Loading/>
        }
      </div>
    </div>
  );
}

export default CardCont;
