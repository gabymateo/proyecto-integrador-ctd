import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login_form';
import Register from './pages/Register';

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
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </div>
  )
}

export default App