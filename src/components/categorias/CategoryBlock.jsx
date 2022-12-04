import React, { useState } from "react";
//import "./../cards/listCard.css";
import "./categoryBlock.css";
import { useSearchParams } from "react-router-dom";

const baseUrl = 'http://3.142.76.191:8080/'

export default function CategoryBlock(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isActive, setActive] = useState("false");

  const toggleClass = () => {
    setActive(!isActive); //esto lo estoy usando para cambiar los estilos de la tarjeta categoría, simulando estar activo/inactivo
    }
  
  const handleClick = (event, id) => {
    event.preventDefault(); 
    toggleClass();
    if (event.currentTarget.firstChild.className == "tipoAlojamiento") {
        if (searchParams.get("cityId")) {
          setSearchParams({cityId:searchParams.get("cityId"),categoryId: id})
        }
        else {
              setSearchParams({categoryId: id})
        }
    }
    else {
      searchParams.get("cityId") ? setSearchParams({cityId:searchParams.get("cityId")}) : setSearchParams({});
    }
  }

  return (
    <div onClick={(event) => handleClick(event, props.id)} className="BloqueCategoria">
      <div className={isActive ? "tipoAlojamiento": "tipoAlojamientoActivo"}>
        <div className="imagesTipoAlojamiento">
          <img src={props.Foto} />
        </div>
        <div className="infoCategoria">
          <h2>{props.Nombre}</h2>
          <p className="descrip">{props.Descripcion}</p>
        </div>
      </div>
    </div>
  );
}
