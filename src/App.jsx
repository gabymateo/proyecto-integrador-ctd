import React from 'react';
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



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
        <Route path='/filter' element={<Filter/>}></Route>
      </Routes>
    </>
  )
}

export default App