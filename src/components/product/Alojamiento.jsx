import React from "react";
import "./alojamiento.css";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
//Iconos

import { FiShare2 } from 'react-icons/fi';
import { AiTwotoneHeart } from 'react-icons/ai';
//React Slider
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { Politicas } from "./Politicas";
import { HeaderAlojamiento } from "./HeaderAlojamiento";
import { Calendario } from "./Calendario";
import { useProductsApi } from "../../apis/productsApi";


export const Alojamiento = () => {

  const {getProducts, products} = useProductsApi()
  const ident = useParams().id
  
  React.useEffect(() => {
    getProducts(ident)
  },[])
  
  //console.log(products.data?.images);
  //console.log(api.products.name);


  //console.log(ident);

  const images = [
    {
      src: "https://i.blogs.es/c68014/casa-3d/840_560.jpeg",
      id: 1,
    },
    {
      src: "https://i.blogs.es/c68014/casa-3d/840_560.jpeg",
      id: 2,
    },
    {
      src: "https://i.blogs.es/c68014/casa-3d/840_560.jpeg",
      id: 3,
    },
    {
      src: "https://i.blogs.es/c68014/casa-3d/840_560.jpeg",
      id: 4,
    },
    {
      src: "https://i.blogs.es/c68014/casa-3d/840_560.jpeg",
      id: 5,
    },
  ];
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


  return (
    <div className="alojamiento">
      <HeaderAlojamiento/>
      <div className="alojamiento__ubicacion">
        <div className="ubicacion__container">
          <div className="ciudad">
            <p></p>
            <p>A 940 m del centro</p>
          </div>
          <div className="puntuacion">
            <p>Muy bueno</p>
            <span>Estrellitas</span>
            <span>Puntuacion</span>
          </div>
        </div>
      </div>
      <div className="alojamiento__imagenes">
        <div className="imagenes__botones">
          <FiShare2 className="share" />
          <AiTwotoneHeart className="like" />
        </div>
        <div className="imagenes__container">
          {/*
          <div className="imagenes__imagen-principal">
            <img src='https://i.blogs.es/c68014/casa-3d/840_560.jpeg' alt="" />
          </div>
            */}
          <div className="imagenes__imagen-secundaria">
              {products.data?.images?.map((image, i=0) => (
                <div key={image.id} className={`imagen${i}`}>
                  <img src={image.url}  />
                </div>
                
              ))}
              <p>Ver mas</p>
          </div>
        </div>
      </div>
      <div className="alojamiento__descripcion">
        <div className="descripcion__container">
          <h1>Titulo</h1>
          <p>Texto de descripcio</p>
        </div>
      </div>
      <div className="alojamiento__caracteristicas">
        <div className="caracteristicas__container">
          <h1>¿Que ofrece este lugar?</h1>
          <div className="caracteristicas__barra"></div>
          <div className="caracteristicas__atributos">
            <p>Lorem.</p>
            <p>Dolor.</p>
            <p>Eius.</p>
            <p>In?</p>
            <p>Vitae?</p>
            <p>Eligendi?</p>
            <p>Nam?</p>
          </div>
        </div>
      </div>
      <Calendario/>
      <Politicas/>
    </div>
  );
};
