import React from "react";
import "./alojamiento.css";
import { IoChevronBack } from "react-icons/io5";
import { NavLink, useParams } from "react-router-dom";
import { useProductsApi } from "../../apis/productsApi";

export const HeaderAlojamiento = () => {
  //console.log(props.producto);
  

  return (
    <>
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
    </>
  );
}
