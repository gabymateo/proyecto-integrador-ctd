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
  useParams,
} from "react-router-dom";

const baseUrl = 'http://18.220.195.162:8080/grupo5'

function App() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(()=>{
    const getProducts = async () => {
        try {
            const responseGetProducts = await axios.get(`${baseUrl}/products/`)
            setProducts(responseGetProducts.data.data);
        }
        catch (error) {
            console.error('error', error)
        }
    }
    getProducts();
  },[])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home productos={products} setProducts={setProducts}/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
        <Route path='/filter' element={<Filter/>}></Route>
      </Routes>
    </>
  )
}

export default App