import React from 'react';
import { IoChevronBack } from 'react-icons/io5';
import './alojamiento.css';

export const Alojamiento = () => {
  return (
    <div className='alojamiento'>
      <div className='headerAlojamiento'>
        <div className='alojamientoContainer'>
          <div className='info'>
            <h4>HOTEL</h4>
            <h1>Hermitage Hotel</h1>
          </div>
          <IoChevronBack className='backButton'/>
        </div>
      </div>
      <div className='ubicacion'>
        <div className='ubiContainer'>Buenos Aires</div>
        <div className='puntuacion'>Muy bueno</div>
        <div className='imagenes'>
          <p>Ver mas</p>
        </div>
      </div>
    </div>
  );
};
