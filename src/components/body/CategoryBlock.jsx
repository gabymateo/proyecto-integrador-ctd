import React from "react";
import "../../styles/categoryBlock.css";

export default function CategoryBlock (props) {

    return(
        
        <div className='BloqueCategoria'>
            <div className="tipoAlojamiento">
                <div className="imagesTipoAlojamiento">
                    <img src= {props.Foto}/>
                </div>                
                <div className="infoCategoria">
                    <h2>{props.Nombre}</h2>   
                    <p className="descrip">{props.Descripcion}</p>
                </div>
            </div>
        </div>        
    )
}