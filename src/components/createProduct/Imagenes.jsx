import React from "react";
import { FaWindowClose } from "react-icons/fa";

export const Imagenes = (props) => {
  return (
    <>
      <div className="imagenes">
        <h1>Cargar imágenes</h1>
        <div className="imagenes__contenedor">
          <div>
            <input
              type="text"
              value={props.img}
              onChange={(ev) => props.setImg(ev.target.value)}
            />
          </div>
          <FaWindowClose />
        </div>
      </div>
    </>
  );
};
