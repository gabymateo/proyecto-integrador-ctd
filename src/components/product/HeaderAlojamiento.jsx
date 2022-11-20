import React from "react";
import "./alojamiento.css";
import { IoChevronBack } from "react-icons/io5";
import { NavLink, useParams } from "react-router-dom";
import { useProductsApi } from '../../apis/productsApi';

export const HeaderAlojamiento = () => {
  

  const ide = useParams().id
  const {getProducts, products} = useProductsApi()

  React.useEffect(()=>{
    getProducts(ide)
  },[])


  return (
    <>
      <div className="alojamiento__header">
        <div className="header__container">
          <div className="info">
            <p>{products.data?.category?.title}</p>
            <h1>{products.data?.name}</h1>
          </div>
          <NavLink to="/">
            <IoChevronBack className="backButton" />
          </NavLink>
        </div>
      </div>
    </>
  );
}
