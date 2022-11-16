import React, { useState } from "react";
import "./categoryBlock.css";
import { useSearchParams } from "react-router-dom";

const baseUrl = 'http://18.220.195.162:8080/grupo5'

export default function CategoryBlock(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const handleClick = (event, id) => {
    event.preventDefault();    
    setSearchParams({cityId:searchParams.get("cityId"),categoryId: id})
}

  return (
    <div onClick={(event) => handleClick(event, props.id)} className="BloqueCategoria">
      <div className="tipoAlojamiento">
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
