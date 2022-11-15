import React, { useState } from "react";
import "../../styles/categoryBlock.css";
import { useProductsApi } from "../../apis/productsApi";
import { useEffect } from "react";
import axios from "axios";

const baseUrl = 'http://18.220.195.162:8080/grupo5'

export default function CategoryBlock(props) {

  //const {products, getProductsFilterCategory} = useProductsApi();
  const [option, setOption] = useState("");
  
  const handleClick = (event, id) => {
    event.preventDefault();
    console.log("categoria: ", id);
    
    const getProductsFilterCategory = async (id) => {
      try {
          console.log(`${baseUrl}/products/?categoryId=${id}`);
          const responseGetProductsFilterCategory = await axios.get(`${baseUrl}/products/?categoryId=${id}`)
          //console.log("responseGetProductsFilterCategory: ", responseGetProductsFilterCategory.data);
          props.setProducts(responseGetProductsFilterCategory.data.data);
      }
      catch (error) {
          console.error('error', error.response.data)
      }    
  }
    getProductsFilterCategory(id)
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
