import React from 'react'
import Header from '../components/header/Header';
import { FilterComponent } from '../components/filter/FilterComponent';
import Footer from '../components/footer/Footer';

export const Filter = () => {
  return (
    <>
        <Header/>
        <FilterComponent/>
        <Footer/>
    </>
  )
}
