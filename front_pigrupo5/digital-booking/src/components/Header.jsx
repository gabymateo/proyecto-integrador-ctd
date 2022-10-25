import React from 'react';
import '../styles/header.css';
import Logo from './Logo';
import {GiHamburgerMenu} from 'react-icons/gi';

const Header = () => {
  return (
    <div className='header'>
        <div className='headerContainer'>
          <div className='container-logo'>
            <span className="logo"><Logo/></span>
            <span className="lema">Sentite como en tu hogar</span>
          </div>
          <div className="headerItems">
              <button className="headerButton">Crear cuenta</button>
              <button className="headerButton">Registrarse</button>
              <GiHamburgerMenu className='toggleButton'/>
          </div>
        </div>
    </div>
  )
}

export default Header;
