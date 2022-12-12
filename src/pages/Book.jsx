import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { HeaderAlojamiento } from '../components/product/HeaderAlojamiento';
import { Reserva } from '../components/reserva/Reserva';
import { Politicas } from '../components/product/Politicas';
export const Book = () => {
  return (
    <>
    <Header/>
    <HeaderAlojamiento/>
    <Reserva/>
    <Politicas/>
    <Footer/>
    </>
  )
}
