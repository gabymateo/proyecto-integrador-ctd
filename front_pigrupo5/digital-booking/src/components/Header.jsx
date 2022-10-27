import React from "react";
import "../styles/header.css";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="container-logo">
          <span className="logo">
            <Logo />
          </span>
          <span className="lema">Sentite como en tu hogar</span>
        </div>
        <div className={`headerItems ${clicked && "active"}`}>
          <div className="menuContainer">
            <span>MENÚ</span>
          </div>
          <button className="headerButton">Crear cuenta</button>
          <button className="headerButton">Iniciar sesión</button>
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
