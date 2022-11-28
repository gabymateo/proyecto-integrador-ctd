import React from "react";
import "./alojamiento.css";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
//Iconos
import { MdKitchen } from 'react-icons/md';
import {FaTv} from 'react-icons/fa';
import {GiThermometerCold} from 'react-icons/gi';
import {MdOutlinePets} from 'react-icons/md';
import {AiFillCar} from 'react-icons/ai';
import {TbSwimming} from 'react-icons/tb';
import {FaWifi} from 'react-icons/fa';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { HeaderAlojamiento } from "./HeaderAlojamiento";
import { Ubicacion } from "./Ubicacion";
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
  
  //console.log(products.data);
  //console.log(api.products.name);
  //console.log(ident);

  return (
    <div className="alojamiento">
      <HeaderAlojamiento/>
      <Ubicacion products={products.data}/>
      <BloqueImagenes products={products.data}/>
      <BloqueImagenesRes products={products.data}/>
      <div className="alojamiento__descripcion">
        <div className="descripcion__container">
          <h1>SubTitulo</h1>
          <p>Texto de descripcion</p>
        </div>
      </div>
      <div className="alojamiento__caracteristicas">
        <div className="caracteristicas__container">
          <h1>¿Que ofrece este lugar?</h1>
          <div className="caracteristicas__barra"></div>
          <div className="caracteristicas__atributos">
            <p><MdKitchen/>Cocina</p>
            <p><FaTv/>Televisor</p>
            <p><GiThermometerCold/>Aire Acondicionado</p>
            <p><MdOutlinePets/>Apto Mascotas</p>
            <p><AiFillCar/>Estacionamiento Gratuito</p>
            <p><TbSwimming/>Pileta</p>
            <p><FaWifi/>WiFi</p>
          </div>
        </div>
      </div>
      <FechasDisponibles/>
      <Politicas/>
    </div>
  );
};

/**
  const settings = {
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
 */