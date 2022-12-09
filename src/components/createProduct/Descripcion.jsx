import React, { useState } from "react";

export const Descripcion = (props) => {
  return (
    <>
      <form className="descripcion">
        <p>Descripción</p>
        <div>
          <textarea
            type="text"
            name="description"
            value={props.desc}
            onChange={(ev) => props.setDesc(ev.target.value)}
            placeholder="Introduce aqui la descripción del producto"
          ></textarea>
        </div>
      </form>
    </>
  );
};
