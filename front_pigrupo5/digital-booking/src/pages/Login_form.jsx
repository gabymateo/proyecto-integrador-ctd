import React from 'react';
import Header from '../components/Header';
import Login from '../components/Login';
import Footer from '../components/Footer';

const userTest = {
  email: 'fulano@gmail.com',
  password: 'prueba123'
}

const Login_form = () => {

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = (correo, contraseña) =>{
    (correo == userTest.email && contraseña == userTest.password)? setIsAuthenticated(true): setIsAuthenticated(false);
  }

  return (
    <div>
        <Header/>
        <Login onHandleLogin={handleLogin}/>
        {isAuthenticated? <p>la autenticacíón es correcta</p>:<p>No se ha autenticado</p>};
        <Footer/>
    </div>
  )
}

export default Login_form;