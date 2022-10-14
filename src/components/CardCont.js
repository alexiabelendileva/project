import React, { useEffect, useState } from "react";
import Card from "./Card";
import './CardCont.css'

function CardCont() {
  const [char, setChar] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      // para montar el componente se ejecuta el  fetch
      const getChar = async () => {
        try {
          //al no especificar nada en el fetch, estoy utilizando el método get para  obtener recursos de la api mediante el param character
          const response = await fetch(
            "https://rickandmortyapi.com/api/character/"
          );
          const data = await response.json();
          console.log(data);
          setChar(data);
        } catch (error) {
          console.log("error");
          console.log(error);
        }
      };
      getChar();
    }, 2000);
  }, []); //sin los corchetes se renderizan constantemente si hay cambio de props o cambio de estado, ya que afectaría la performance de la aplicación

  return (
    <div className="content">
      {char.length !==0 ?
        char && char.map(character => (
          <Card
            image={character.image}
            name={character.name}
            status={character.status}
            species={character.species}
            location={character.location}
            dimension={character.dimension}
            id={character.id}
            gender={character.gender}
          /> 
        )) : <p className="loading">Loading...</p>}
    </div>
  );
}

export default CardCont;
