import React from 'react';
import './body.css';
import ListCards from '../cards/ListCards';
import {BloqueBuscador} from '../buscador/BloqueBuscador';
import ListCategoryBlock from '../categorias/ListCategoryBlock';

const Body = ({productos, getProductosFiltrados, getProductos}) => {

  return (
    <div className='body'>
      <div className='bodyContainer'>
        <BloqueBuscador getProductosFiltrados={getProductosFiltrados} getProductos={getProductos}/>
        <ListCategoryBlock />
        <ListCards productos={productos}/> 
      </div>
    </div>
  )
}

export default Body