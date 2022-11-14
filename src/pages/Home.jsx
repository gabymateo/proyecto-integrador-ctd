import React from 'react';
import Header from '../components/header/Header';
import Body from '../components/body/Body';
import Footer from '../components/footer/Footer';


const Home = ({productos, setProducts}) => {

  return (
    <>
        <Header/>
        <Body productos={productos} setProducts={setProducts}/>
        <Footer/>
    </>
  )
}

export default Home;
