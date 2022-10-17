import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./CardCont.css";
import Loading from "./Loading";
import 'animate.css'
import Pagination from "./Pagination";

function CardCont() {
  const [characters, setCharacters] = useState([]);
  const [info,setInfo] = useState({})
  const initialUrl = "https://rickandmortyapi.com/api/character";

  // para montar el componente se ejecuta el  fetch
  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results)
        setInfo(data.info)
      })
      .catch((error) => console.log(error));
  };

  function onPrevious(){
    return(
      fetchCharacters(info.prev)
    )
  }

  function onNext(){
    return(
      fetchCharacters(info.next)
    )
  }


  useEffect(() => {
    setTimeout(() => {
      fetchCharacters(initialUrl);
    }, 2000);
  }, []); //sin los corchetes se renderizan constantemente si hay cambio de props o cambio de estado, ya que afectaría la performance de la aplicación

  return (
    <div className="cont">
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      <div className="contenedor">
        {characters.length !== 0 ? characters.map((item,index) => (
          <Card key={index} image={item.image} name={item.name} status={item.status} species={item.species}  id={item.id} gender={item.gender} location={item.location.name} origin={item.origin.name} />)) : <Loading/>
        }
      </div>
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
    </div>
  );
}

export default CardCont;
