import React from "react";
import Card from "./Card"
import Hospedajes from '../../DataMock/Hospedajes.json'
import "../../styles/listCard.css";
import { useProductsApi } from "../../apis/productsApi"; 
import { useState } from "react";
import axios from "axios";

export default function ListCards ({productos}) {

    console.log("prods en listcards", productos);
    
    return (
        <div className='ListCardsContainer'>
        <div className='ListCards'>
            {productos?.map((prod)=>{
                return <Card
                    key={prod.id}
                    // Foto={prod.images[0].name_key} 
                    Categoria={prod.category?.title}
                    Nombre={prod.name}
                    Ubicacion={prod.address}
                    Descripcion={prod.description}
                />  
            })}
        </div>
        </div>
        
    )
}
