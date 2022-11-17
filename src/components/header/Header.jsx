import React from 'react';
import './header.css';
import { Logo, Avatar } from './Logo';
import { GiHamburgerMenu } from 'react-icons/gi'; //icono hamburguesa
import { GrClose } from 'react-icons/gr';//
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  const [clicked, setClicked] = useState(false);
  console.log(props.user);

  return (
    <div className='header'>
      <div className='headerContainer'>
        <div className='container-logo'>
          <NavLink to='/'>
            {' '}
            <span className='logo'>
              <Logo />
            </span>
          </NavLink>
          <span className='lema'>Sentite como en tu hogar</span>
        </div>
        <div className={`headerItems ${clicked && 'active'}`}>
          <GiHamburgerMenu
            className={`toggleButton ${clicked && 'active'}`}
            onClick={() => setClicked(!clicked)}
          />
          <GrClose 
          className={`closeButton ${clicked && 'active'}`}
          onClick={() => setClicked(!clicked)}
          />
          <div className='menuContainer'>
            <span>MENÚ</span>
          </div>
          {props.user != '' && props.user != undefined ? (
            <div className='sesionContainer'>
              <div className='helloUser'>
                <p>
                  Hola <span>{props.user}</span>
                </p>
                <button className='headerButton'>Cerrar Sesion </button>
              </div>
              <Avatar />
            </div>
          ) : (
            <div className='buttonContainer'>
              {' '}
              <NavLink to='/register' className='link_btn'>
                <button className='headerButton'>Crear cuenta</button>
              </NavLink>
              <NavLink to='/login' className='link_btn'>
                <button className='headerButton'>Iniciar sesión</button>
              </NavLink>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Header;
