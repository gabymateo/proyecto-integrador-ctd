import React from 'react';
import './form.css';
import { NavLink } from 'react-router-dom';
import {IoChevronBack} from 'react-icons/io5';
/*---COMPONENTES---*/
import { Datos } from './Datos'
import { Descripcion } from './Descripcion';
import { Atributos } from './Atributos';
import { Politicas } from './Politicas';
export const Form = () => {
  return (
    <>
    <div className='header-admin'>
        <h1>Administración</h1>
        <NavLink to="/">
            <IoChevronBack className="backButton" />
        </NavLink>
    </div>
    <div className='admin-form'>
     <h1>Crear Propiedad</h1>
    <div className="admin-form_container">
        <Datos/>
        <Descripcion/>
        <Atributos/>
        <Politicas/>
        <div className="cargarImg"></div>
        <button>Crear</button>
    </div>
    </div>
     
    </>
  )
}



export default Form;