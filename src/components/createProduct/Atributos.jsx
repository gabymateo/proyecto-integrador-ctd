import React from "react";
import {FaWindowClose} from 'react-icons/fa'

export const Atributos = (props) => {
  return (
    <>
      <div className="atributos">
        <h1>Agregar atributos</h1>
        <div className="atributos__contenedor">
          <label>
            Nombre
            <div>
              <input 
              type="text"
              value={props.atribute}
              onChange={ev=> props.setAtributeName(ev.target.value)} />
            </div>
          </label>
          <label>
            Ícono
            <div>
              <input 
              type="text" 
              value={props.atribute}
              onChange={ev=> props.setAtributeIcon(ev.target.value)}/>
            </div>
          </label>
          <FaWindowClose/>
        </div>
      </div>
    </>
  );
};
