import React from "react";
import CategoryBlock from "./CategoryBlock";
import "./categoryBlock.css";
//import "./../cards/listCard.css";
import { useCategoriesApi } from '../../apis/categoriesApi'

const imgCategorias = {
  19: "https://www.elindependiente.com/wp-content/uploads/2022/02/palladium-hotel-ibiza-656x368.jpg",
  20: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800,h_534/http://www.mamisybebes.com/wp-content/uploads/2011/04/hostel.jpg",
  21: "https://e.nexoinmobiliario.pe/customers/v-v-grupo-inmobiliario/2050-carriquiry-894/departamentos-san-isidro-5fa0d75d4d114_xm.jpg",
  22: "https://media.istockphoto.com/id/493769748/photo/breakfast-in-bed.jpg?s=612x612&w=0&k=20&c=YR8ZFdgA90JEev4nDsp2kJjJmEPRY7LOBfUUZDSkSas=",
}

export default function ListCategoryBlock() {


  const {categories, getCategories}= useCategoriesApi();

  return (
    <div className="ListCategoryContainer">
      <div className="TituloCategoria">
        <h2>Buscar por tipo de tipo de alojamiento</h2>
      </div>
      <div className="ListCategoryBlock">
        {categories?.map((category) => {
          return <CategoryBlock
            id={category.id}
            key={category.id}
            Foto={imgCategorias[category.id]}
            Nombre={category.title}
            Descripcion={category.description}
          />
})}
      </div>
    </div>
  );
}
