import React from 'react';
import '../styles/header.css';
import Logo from './Logo';

const Header = () => {
  return (
    <div className='header'>
        <div className='headerContainer'>
          <div className='container-logo'>
            <span className="logo"><Logo/></span>
            <span className="lema">Sentite como en tu hogar</span>
          </div>
          <div className="headerItems">
              <button className="headerButton">Registrarse</button>
              <button className="headerButton">Login</button>
          </div>
        </div>
    </div>
  )
}

export default Header;
