import React from 'react';
import '../../styles/body.css';
import { BloqueBuscador } from './BloqueBuscador';
const Body = () => {
  return (
    <div className='body'>
      <div className='bodyContainer'>
        <BloqueBuscador/>
      </div>
    </div>
  )
}

export default Body