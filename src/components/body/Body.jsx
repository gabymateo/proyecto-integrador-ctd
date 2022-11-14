import React from 'react';
import '../../styles/body.css';
import ListCards from './ListCards';
import { BloqueBuscador } from './BloqueBuscador';
import ListCategoryBlock from './ListCategoryBlock';

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