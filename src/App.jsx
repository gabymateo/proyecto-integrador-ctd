import React from 'react';
import axios from 'axios';
import './app.css'
import Home from './pages/Home';
import Login from './pages/Login_form';
import Register from './pages/Register';
import { Product } from './pages/Product';
import { Filter } from './pages/Filter';
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
import { Book } from './pages/Book';
import {ReservaOk} from './components/reserva/ReservaOk'
import { CustomProvider } from './apis/userContext';
import { ProtectedElement} from './apis/ProtectedElement';
import {Admin} from './pages/Admin'
import {ProductOk} from './components/createProduct/ProductOk';


function App() {
  const {products, getProducts, getProductsFilter} = useProductsApi()


  React.useEffect(()=> {
    getProductsFilter()
  }, [])


  return (
    <>
    <CustomProvider>
      <Routes>
        <Route path="/" element={<Home productos={products} getProductosFiltrados={getProductsFilter} getProductos={getProducts} />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        {/* <Route path="/admin" element={ <ProtectedElement> <Admin/> </ProtectedElement> }></Route> */}
        <Route path="/admin" element={ <Admin/> }></Route>
        {/* COMENTAR/ BORRAR LA LINEA DE ARRIBA */}
        <Route path="/admin/newProductOk" element={ <ProductOk/> }></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
        <Route path='/filter' element={<Filter/>}></Route>
        {/* <Route path='/product/:id/reserva' element={ <ProtectedElement><Book/></ProtectedElement> }></Route> */}
        <Route path='/product/:id/reserva' element={ <Book/> }></Route>
        <Route path='/product/:id/reserva/ok' element={<ReservaOk/>}></Route>
      </Routes>
      </CustomProvider>
    </>
  )
}

export default App