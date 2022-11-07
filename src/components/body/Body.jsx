import React from 'react';
import '../../styles/body.css';
import ListCards from './ListCards';
import { BloqueBuscador } from './BloqueBuscador';
import ListCategoryBlock from './ListCategoryBlock';

const Body = () => {
  return (
    <div className='body'>
      <div className='bodyContainer'>
        <BloqueBuscador/>
        <ListCategoryBlock/>
        <ListCards/> 
      </div>
    </div>
  )
}

export default Body