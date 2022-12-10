import React from "react";
import { NavLink } from "react-router-dom";
import '../reserva/reserva.css'
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
                <h1>¡Bienvenido!</h1>
                <p>Su usuario ha sido creado de manera exitosa.</p>
                <NavLink to={"/login"}>
                    <button>Finalizar</button>
                </NavLink>
            </div>
        </div>
        <Footer />
    </>
    );
};
