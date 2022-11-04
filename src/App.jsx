import React from 'react';
import './app.css'
import Home from './pages/Home';
import Login from './pages/Login_form';
import Register from './pages/Register';
import { Product } from './pages/Product';
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Link,
  Navigate,
} from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
      </Routes>
    </>
  )
}

export default App