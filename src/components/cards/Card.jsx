import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "./listCard.css";

export default function Card (props) {
    const id = props.id
    //console.log({id});

    return(
        
        <div className='tarjeta'>
            <div className="images">
                <img src= {props.Foto}/>
            </div>
            <div className="infoCard">
                <p>{props.Categoria}</p>  
                <h1>{props.Nombre}</h1>   
                <h2>{props.Ubicacion}</h2>
                <p className="desc">{props.TituloDescripcion}</p>
                <NavLink to={`product/${props.id}`} >
                {/* incluir la ruta por id de producto*/}  
                <button className='button'> Ver detalle </button> 
                </NavLink> 
            </div>
        </div>
        
    )
}