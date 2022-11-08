import React from "react";
import "./alojamiento.css";
import { NavLink } from "react-router-dom";
//Iconos
import { IoChevronBack } from "react-icons/io5";
import { FiShare2 } from 'react-icons/fi';
import { AiTwotoneHeart } from 'react-icons/ai';
//React Slider
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

export const Alojamiento = () => {
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
      <div className="alojamiento__header">
        <div className="header__container">
          <div className="info">
            <p>HOTEL</p>
            <h1>Hermitage Hotel</h1>
          </div>
          <NavLink to="/">
            <IoChevronBack className="backButton" />
          </NavLink>
        </div>
      </div>
      <div className="alojamiento__ubicacion">
        <div className="ubicacion__container">
          <div className="ciudad">
            <p>Buenos Aires</p>
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
              {images.map((image) => (
                <div className={`imagen${image.id}`}>
                  <img src={image.src}  />
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
      <div className="alojamiento__politicas">
        <div className="politicas__container">
          <h1>Qué tenés que saber</h1>
          <div className="caracteristicas__barra"></div>
          {/**Cambiar nombre a barra */}
          <div className="normas__container">
            <div className="normas">
              <h1>Normas</h1>
              <p>Lorem, ipsum dolor.</p>
              <p>Rem, cum reprehenderit?</p>
              <p>Mollitia, ipsam accusantium!</p>
            </div>
            <div className="seguridad">
              <h1>Seguridad</h1>
              <p>Lorem, ipsum.</p>
              <p>Ipsa, consectetur?</p>
              <p>Officia, nisi.</p>
            </div>
            <div className="cancelacion">
              <h1>Cancelacion</h1>
              <p>Lorem ipsum dolor sit.</p>
              <p>Laboriosam saepe quam vitae.</p>
              <p>Minus natus non repellat!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
