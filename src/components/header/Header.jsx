import React from 'react';
import './header.css';
import { Logo, Avatar } from './Logo';
// Iconos
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose, GrUserAdmin } from 'react-icons/gr';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import userContext from '../../apis/userContext';

const Header = (props) => {
  const [clicked, setClicked] = useState(false);
  const { userLogged, setUserLogged, userRol} = React.useContext(userContext);
  
  const handleCerrarSesion = () => {
    localStorage.clear()
    setUserLogged("")  //llamo la función del componente userContext y borro el usuario que estaba logueado
  }


  return (
    <div className="header">
      <div className="headerContainer">
        <div className="container-logo">
          <NavLink to="/">
            {" "}
            <span className="logo">
              <Logo />
            </span>
          </NavLink>
          <span className="lema">Sentite como en tu hogar</span>
        </div>
        <div className={`headerItems ${clicked && "active"}`}>
          <GiHamburgerMenu
            className={`toggleButton ${clicked && "active"}`}
            onClick={() => setClicked(!clicked)}
          />
          <GrClose
            className={`closeButton ${clicked && "active"}`}
            onClick={() => setClicked(!clicked)}
          />
          <div className="menuContainer">
            <span>MENÚ</span>
          </div>
          {userLogged != "" && userLogged != undefined ? (
            <div className="sesionContainer">
              {/* {userRol===1 ? <NavLink to='/admin'><button className='adminButton'> Administrar </button> </NavLink>: undefined} */}

              <div className="helloUser">
                <p>Hola,</p>
                <span>{userLogged}</span>
                {/* <span>Ramiro Fontesola</span> */}
                {/* <button className='headerButton' onClick={handleCerrarSesion} >Cerrar Sesion </button> */}
                <GrClose className="closeBtn" onClick={handleCerrarSesion} />
                {/* <GrUserAdmin className='admnBtn'/> */}
                {userRol === 1 ? (
                  <NavLink to="/admin">
                    {" "}
                    <GrUserAdmin className="admnBtn" />
                  </NavLink>
                ) : undefined}
              </div>
              
              <Avatar />
            </div>
          ) : (
            <div className="buttonContainer">
              {" "}
              <NavLink to="/register" className="link_btn">
                <button className="headerButton">Crear cuenta</button>
              </NavLink>
              <NavLink to="/login" className="link_btn">
                <button className="headerButton">Iniciar sesión</button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
