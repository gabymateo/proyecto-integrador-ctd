import React from 'react'
import './alojamiento.css';
import { useProductsApi } from '../../apis/productsApi';
import { useParams } from 'react-router-dom';

export const Politicas = () => {

  const identificador = useParams().id
  const {getProducts, products} = useProductsApi()

  React.useEffect(()=>{
    getProducts(identificador)
  }, [])

  return (
    <>
    <div className="alojamiento__politicas">
        <div className="politicas__container">
          <h1>Qué tenés que saber</h1>
          <div className="caracteristicas__barra"></div>
          {/**Cambiar nombre a barra */}
          <div className="normas__container">
            {products.data?.features?.map((politica) => {
              return <div key={politica.id} className='normas'> 
              <h1>Normas</h1>
              <p>{politica.name}</p>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}
