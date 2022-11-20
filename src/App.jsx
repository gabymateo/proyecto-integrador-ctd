import React from 'react';
import axios from 'axios';
import './app.css'
import Home from './pages/Home';
import Login from './pages/Login_form';
import Register from './pages/Register';
import { Product } from './pages/Product';
import { Filter } from './pages/Filter';
import Booking_page  from './pages/Booking'
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Link,
  Navigate,
  useParams,useSearchParams
} from "react-router-dom";
import { useProductsApi } from './apis/productsApi';

function App() {
  const {products, getProducts, getProductsFilter} = useProductsApi()

  React.useEffect(()=> {
    getProductsFilter()
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home productos={products} getProductosFiltrados={getProductsFilter} getProductos={getProducts} />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
        <Route path='/filter' element={<Filter/>}></Route>
        <Route path='/booking' element={<Booking_page/>}></Route>
      </Routes>
    </>
  )
}

export default App