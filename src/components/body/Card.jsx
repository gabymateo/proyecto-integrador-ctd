import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/listCard.css";

export default function Card (props) {

    return(
        
        <div className='tarjeta'>
            <div className="images">
                <img src= {props.Foto}/>
            </div>
            <div className="infoCard">
                <p>{props.Categoria}</p>  
                <h1>{props.Nombre}</h1>   
                <h2>{props.Ubicacion}</h2>
                <p className="desc">{props.Descripcion}</p>
                <NavLink to='/product' >
                {/* incluir la ruta por id de producto*/}  
                <button className='button'> Ver detalle </button> 
                </NavLink> 
            </div>
        </div>
        
    )
}