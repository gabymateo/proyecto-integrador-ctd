import React from "react";
import "./alojamiento.css";
import { IoChevronBack } from "react-icons/io5";
import { NavLink, useParams } from "react-router-dom";
import { useProductsApi } from '../../apis/productsApi';

export const HeaderAlojamiento = () => {
  const {getProducts, products} = useProductsApi()
  const id = useParams().id
  
  React.useEffect(() => {
    getProducts(id)
  },[])

  const data = products?.data;

  return (
    <>
      <div className="alojamiento__header">
        <div className="header__container">
          <div className="info">
            <p>{data?.category?.title}</p>
            <h1>{data?.name}</h1>
          </div>
          <NavLink to="/">
            <IoChevronBack className="backButton" />
          </NavLink>
        </div>
      </div>
    </>
  );
}
