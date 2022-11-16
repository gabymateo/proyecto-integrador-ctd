import React from "react";
import CategoryBlock from "./CategoryBlock";
import Categorias from "../../DataMock/Categorias.json";
import "./categoryBlock.css";

export default function ListCategoryBlock(props) {
  return (
    <div className="ListCategoryContainer">
      <div className="TituloCategoria">
        <h2>Buscar por tipo de tipo de alojamiento</h2>
      </div>
      <div className="ListCategoryBlock">
        {Categorias.map((categoria) => (
          <CategoryBlock
            key={categoria.id}
            Foto={categoria.Crimg}
            Nombre={categoria.Title}
            Descripcion={categoria.Description}
          />
        ))}
      </div>
    </div>
  );
}
