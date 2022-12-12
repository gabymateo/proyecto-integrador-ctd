import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "./listCard.css";
import { useProductsApi } from "../../apis/productsApi";

export default function Card(props) {
  const { getProducts, products } = useProductsApi();
  const ids = useParams().id;

  React.useEffect(() => {
    getProducts(ids);
  }, []);
  
  const id = props.id;
//   console.log(rate);

  return (
    <div className="tarjeta">
      <div className="images">
        <img src={props.Foto} />
      </div>
      <div className="infoCard">
        <div>
          <p>{props.Categoria}</p>
          <h1>{props.Nombre}</h1>
          <div>
            <p>{props.rate}</p>
          </div>
        </div>
        <h2>{props.Ubicacion}</h2>
       
        <p className="desc">{props.TituloDescripcion}</p>
        <NavLink to={`product/${props.id}`}>
          {/* incluir la ruta por id de producto*/}
          <button className="button"> Ver detalle </button>
        </NavLink>
      </div>
    </div>
  );
}
