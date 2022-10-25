import React from "react";
import Card from "./Card"
import Hospedajes from '../../DataMock/Hospedajes.json'
import "../../styles/card2.css";

export default function ListCards (props) {

    return (
        <div className='ListCards'>
            {Hospedajes.map((hospedaje)=>(
            <Card
            key={hospedaje.id}
            Foto= {hospedaje.Crimg}
            Categoria={hospedaje.Category}
            Nombre= {hospedaje.Title}
            Ubicacion= {hospedaje.Location}
            Descripcion={hospedaje.Description}
            />
            ))}
        </div>
    )
}
