import React from "react";
import {FaWindowClose} from 'react-icons/fa';

export const Imagenes = () => {
  return (
    <>
      <div className="imagenes">
        <h1>Cargar imágenes</h1>
        <div className="imagenes__contenedor">
          <div>
            <input type="text" />
          </div>
          <FaWindowClose />
        </div>
      </div>
    </>
  );
};
