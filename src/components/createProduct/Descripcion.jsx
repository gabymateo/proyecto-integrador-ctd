import React, { useState } from "react";

export const Descripcion = (props) => {
  return (
    <>
      <form className="descripcion">
        <p>Descripción</p>
        <div>
          <input
          type="text"
          value={props.descTitle}
          onChange={(ev) => props.setDescTitle(ev.target.value)}
          placeholder="Introduce un breve titulo para la descripcion" />
          <div className="description__barra"></div>
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
