import React from "react";
import "./alojamiento.css";
import { useParams } from "react-router-dom";
import { useProductsApi } from "../../apis/productsApi";

export const Politicas = (props) => {
  const { getProducts, products } = useProductsApi();
  const id = useParams().id;

  React.useEffect(() => {
    getProducts(id);
  }, []);
  const rules = products?.data?.features.filter(x=> x.type!=='security'&&x.type!=='cancelation');
  const security = products?.data?.features.filter(x=> x.type!=='rules'&&x.type!=='cancelation');
  const cancelation = products?.data?.features.filter(x=> x.type!=='rules'&& x.type!== 'security');

 
  return (
    <>
      <div className="alojamiento__politicas">
        <div className="politicas__container">
          <h1>Qué tenés que saber</h1>
          <div className="caracteristicas__barra"></div>
          {/**Cambiar nombre a barra */}
          {/*<div className="normas__container">
            {features?.map((politica) => {
              return (
                <div key={politica.id} className="normas">
                  <h1>Normas</h1>
                  <p>{politica.name}</p>
                </div>
              );
            })}*/}
            <div className='normas__container'>
              <div className="normas">
                <h1>Normas</h1>
                {rules?.map((rules)=>{
                  return(
                    <p>{rules.name}</p>
                  )
                })}
              </div>
              <div className="seguridad">
                <h1>Seguridad</h1>
                {security?.map((rules)=>{
                  return(
                    <p>{rules.name}</p>
                  )
                })}
              </div>
              <div className="cancelacion">
                <h1>Política de Cancelación</h1>
                {cancelation?.map((rules)=>{
                  return(
                    <p>{rules.name}</p>
                  )
                })}
              </div>

            </div>
          </div>
        </div>
      
    </>
  );
};
