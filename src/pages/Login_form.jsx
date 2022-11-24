import React from 'react';
import Header from '../components/header/Header';
import Login from '../components/sesion/Login';
import Footer from '../components/footer/Footer';
import Body from '../components/body/Body';

// const userTest = {
//   email: 'fulano@gmail.com',
//   password: 'prueba123'
// }

const Login_form = () => {

  const [isAuthenticated, setIsAuthenticated] = React.useState(undefined);
  const [userLogged, setUserLogged] = React.useState("");

  const handleLogin = (correo, contraseña) =>{
    if (correo == userTest.email && contraseña == userTest.password) {
      setIsAuthenticated(true);
      setUserLogged(correo); 
    }
    else setIsAuthenticated(false);   
  }

  return (
    <>
        <Header user={userLogged}/>
        {isAuthenticated  ? <div> <Body/> </div>: <Login onHandleLogin={handleLogin} initSesion={isAuthenticated} /> };
        <Footer/>
    </>
  )
}

export default Login_form