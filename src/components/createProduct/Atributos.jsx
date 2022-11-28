import React from "react";
import {FaWindowClose} from 'react-icons/fa'

export const Atributos = () => {
  return (
    <>
      <div className="atributos">
        <h1>Agregar atributos</h1>
        <div className="atributos__contenedor">
          <label>
            Nombre
            <div>
              <input type="text" />
            </div>
          </label>
          <label>
            Ícono
            <div>
              <input type="text" />
            </div>
          </label>
          <FaWindowClose/>
        </div>
      </div>
    </>
  );
};
