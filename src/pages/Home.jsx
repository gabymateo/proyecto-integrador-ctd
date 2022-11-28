import React from 'react';
import Header from '../components/header/Header';
import Body from '../components/body/Body';
import Footer from '../components/footer/Footer';

const Home = ({productos, getProductosFiltrados, getProductos}) => {

  return (
    <>
        <Header/>
        <Body productos={productos} getProductosFiltrados={getProductosFiltrados} getProductos={getProductos}/>
        <Footer/>
    </>
  )
}

export default Home;