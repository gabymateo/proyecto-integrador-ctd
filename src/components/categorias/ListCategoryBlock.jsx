import React from "react";
import CategoryBlock from "./CategoryBlock";
import Categorias from "../../DataMock/Categorias.json";
import "./categoryBlock.css";
import { useCategoriesApi } from '../../apis/categoriesApi'

export default function ListCategoryBlock({setProducts}) {

  const {categories, getCategories}= useCategoriesApi();

  return (
    <div className="ListCategoryContainer">
      <div className="TituloCategoria">
        <h2>Buscar por tipo de tipo de alojamiento</h2>
      </div>
      <div className="ListCategoryBlock">
        {categories?.map((category) => {
          return <CategoryBlock
            setProducts={setProducts}
            id={category.id}
            key={category.id}
            Foto={category.Crimg}
            Nombre={category.title}
            Descripcion={category.Description}
          />
})}
      </div>
    </div>
  );
}
