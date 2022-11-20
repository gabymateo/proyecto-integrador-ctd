import React from 'react'
import './alojamiento.css';

export const Politicas = () => {
  return (
    <>
    <div className="alojamiento__politicas">
        <div className="politicas__container">
          <h1>Qué tenés que saber</h1>
          <div className="caracteristicas__barra"></div>
          {/**Cambiar nombre a barra */}
          <div className="normas__container">
            <div className="normas">
              <h1>Normas</h1>
              <p>Lorem, ipsum dolor.</p>
              <p>Rem, cum reprehenderit?</p>
              <p>Mollitia, ipsam accusantium!</p>
            </div>
            <div className="seguridad">
              <h1>Seguridad</h1>
              <p>Lorem, ipsum.</p>
              <p>Ipsa, consectetur?</p>
              <p>Officia, nisi.</p>
            </div>
            <div className="cancelacion">
              <h1>Cancelacion</h1>
              <p>Lorem ipsum dolor sit.</p>
              <p>Laboriosam saepe quam vitae.</p>
              <p>Minus natus non repellat!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
