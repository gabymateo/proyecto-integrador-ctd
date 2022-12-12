import React from "react";
import './form.css'
import { NavLink } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {BsFillPatchCheckFill} from 'react-icons/bs'

export const ProductOk = () => {
  return (
    <>
      <Header />
      <div className="productOk">
        <div className="productOk__container">
          <BsFillPatchCheckFill/>
          <h1>Tu propiedad se ha creado con exito.</h1>
          <NavLink to={"/"}>
            <button>volver</button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  )
}
