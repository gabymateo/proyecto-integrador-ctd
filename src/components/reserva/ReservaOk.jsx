import React from "react";
import { NavLink } from "react-router-dom";
import './reserva.css'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {BsFillPatchCheckFill} from 'react-icons/bs'

export const ReservaOk = () => {
  return (
    <>
      <Header />
      <div className="reservaOk">
        <div className="reservaOk__container">
          <BsFillPatchCheckFill/>
          <h1>¡Muchas Gracias!</h1>
          <p>Su reserva se ha realizado con exito.</p>
          <NavLink to={"/"}>
            <button>Finalizar</button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
};
