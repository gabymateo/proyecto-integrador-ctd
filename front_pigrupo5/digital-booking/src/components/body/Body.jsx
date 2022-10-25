import React from 'react';
import '../../styles/body.css';
import ListCards from './ListCards';

import { BloqueBuscador } from './BloqueBuscador';
const Body = () => {
  return (
    <div className='body'>
      <div className='bodyContainer'>
        <BloqueBuscador/>
        <ListCards/> 
      </div>




    </div>
  )
}

export default Body