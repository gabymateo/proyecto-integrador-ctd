import React from 'react';
import '../../styles/body.css';
import ListCards from './ListCards';

const Body = () => {
  return (
    <div className='body'>
      <div className='bodyContainer'>
        <div className='bloqueBuscador'>
          <h1>Busca ofertas en hoteles, casas y mucho mas.</h1>
          <div className='barraBuscador'></div>
        </div>
      </div>

      <ListCards> </ListCards>

    </div>
  )
}

export default Body