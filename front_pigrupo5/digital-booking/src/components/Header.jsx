import React from "react";
import "../styles/header.css";
import {Logo, Avatar} from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const [clicked, setClicked] = useState(false);
  console.log(props.user);

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="container-logo">
        <NavLink to="/"> <span className="logo">
            <Logo />
          </span>
          </NavLink>
          <span className="lema">Sentite como en tu hogar</span>
        </div>
        <div className={`headerItems ${clicked && "active"}`}>
          <div className="menuContainer">
            <span>MENÚ</span>
          </div>
          {props.user !='' && props.user!= undefined
            ? <div className="sesionContainer">
                    <div className="helloUser"> 
                      <p>Hola <span>{props.user}</span></p> 
                      <button className="headerButton">Cerrar Sesion </button>
                    </div>
                    <Avatar/>
              </div>
            : <div> <button className="headerButton"><NavLink to="/register" className="link_btn">Crear cuenta</NavLink></button>
                    <button className="headerButton"><NavLink to="/login" className="link_btn">Iniciar sesión</NavLink></button> 
              </div>}
          <GiHamburgerMenu
            className="toggleButton"
            onClick={() => setClicked(!clicked)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

/*
import React from 'react';
import '../styles/header.css';
import Logo from './Logo';
import {GiHamburgerMenu} from 'react-icons/gi';
import { useRef } from 'react';

const Header = () => {
 
 

  return (
    <div className='header'>
        <div className='headerContainer'>
          <div className='container-logo'>
            <span className="logo"><Logo/></span>
            <span className="lema">Sentite como en tu hogar</span>
          </div>
          <div className="headerItems">
              <button className="headerButton active">Crear cuenta</button>
              <button className="headerButton active">Registrarse</button>
              <GiHamburgerMenu className='toggleButton'/>
          </div>
        </div>
    </div>
  )
}

export default Header;
*/
