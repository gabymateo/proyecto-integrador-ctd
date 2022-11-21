import React from 'react';
import './alojamiento.css';
import { IoLocationSharp } from 'react-icons/io5';

export const Ubicacion = (props) => {
    const ubi = props?.products;
    console.log(props?.products);
  return (
    <>
    <div className="alojamiento__ubicacion">
        <div className="ubicacion__container">
          <div className="ciudad">
            <p><IoLocationSharp/>{ubi?.address}, {ubi?.city.name}</p>
            <p>A 940 m del centro</p>
          </div>
          <div className="puntuacion">
            <p>Muy bueno</p>
            <span>Estrellitas</span>
            <div className='rate'>
              <p>9</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
