import React from "react";
import "./alojamiento.css";

export const Politicas = (props) => {

  const features = props?.products?.features;

  return (
    <>
      <div className="alojamiento__politicas">
        <div className="politicas__container">
          <h1>Qué tenés que saber</h1>
          <div className="caracteristicas__barra"></div>
          {/**Cambiar nombre a barra */}
          <div className="normas__container">
            {features?.map((politica) => {
              return (
                <div key={politica.id} className="normas">
                  <h1>Normas</h1>
                  <p>{politica.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
