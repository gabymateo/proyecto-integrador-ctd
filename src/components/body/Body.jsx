import React from 'react';
import '../../styles/body.css';
import ListCards from './ListCards';
import {BloqueBuscador} from '../buscador/BloqueBuscador';
import ListCategoryBlock from '../categorias/ListCategoryBlock';

const Body = ({productos, setProducts}) => {
  return (
    <div className='body'>
      <div className='bodyContainer'>
        <BloqueBuscador/>
        <ListCategoryBlock setProducts={setProducts}/>
        <ListCards productos={productos}/> 
      </div>
    </div>
  )
}

export default Body