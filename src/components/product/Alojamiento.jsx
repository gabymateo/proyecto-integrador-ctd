import React from "react";
import "./alojamiento.css";
import { NavLink, useParams, useSearchParams } from "react-router-dom";

import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { HeaderAlojamiento } from "./HeaderAlojamiento";
import { Ubicacion } from "./Ubicacion";
import { Comodities } from "./Comodities";
import { BloqueImagenes, BloqueImagenesRes } from './BloqueImagenes';
import { FechasDisponibles } from "./FechasDisponibles";
import { Politicas } from "./Politicas";
import { useProductsApi } from "../../apis/productsApi";



export const Alojamiento = () => {

  const {getProducts, products} = useProductsApi()
  const ident = useParams().id
  
  React.useEffect(() => {
    getProducts(ident)
  },[])
  
  // console.log(products.data);
  // console.log(api.products.name);
  //console.log(ident);

  return (
    <div className="alojamiento">
      <HeaderAlojamiento />
      <Ubicacion products={products.data} />
      <BloqueImagenes products={products.data} />
      <BloqueImagenesRes products={products.data} />
      <div className="alojamiento__descripcion">
        <div className="descripcion__container">
          <h1>{products.data?.descriptionTitle}</h1>
          <p>{products.data?.description}</p>
        </div>
      </div>
      <Comodities products={products.data}/>
      <FechasDisponibles />
      <Politicas />
    </div>
  );
};
