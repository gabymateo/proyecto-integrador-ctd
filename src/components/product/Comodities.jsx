import React from "react";
//Iconos
import { useParams } from "react-router-dom";
import { useProductsApi } from "../../apis/productsApi";

export const Comodities = () => {
  const { getProducts, products } = useProductsApi();
  const id = useParams().id;

  React.useEffect(() => {
    getProducts(id);
  }, []);

  const comoditi = products?.data?.features.filter(
    (x) => x.type == "comodities"
  );

  return (
    <>
      <div className="alojamiento__caracteristicas">
        <div className="caracteristicas__container">
          <h1>¿Que ofrece este lugar?</h1>
          <div className="caracteristicas__barra"></div>
          <div className="caracteristicas__atributos">
            {comoditi?.map((com) => {
              return (
                <p key={com.id}>
                  <i class={`fa-solid ${com.icon}`}></i>
                  {com.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
