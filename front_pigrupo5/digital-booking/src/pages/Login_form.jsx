import React from 'react';
import Header from '../components/header/Header';
import Login from '../components/header/Login';
import Footer from '../components/Footer';
import Body from '../components/body/Body';

const userTest = {
  email: 'fulano@gmail.com',
  password: 'prueba123'
}

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
    <div>
        <Header user={userLogged}/>
        {isAuthenticated  
          ? <div> <Body/> </div>
          : <div> {isAuthenticated === undefined 
                  ? <Login onHandleLogin={handleLogin} /> 
                  : <div> <Login onHandleLogin={handleLogin} /> <p>Por favor vuelva a intentarlo, sus credenciales son inválidas</p> </div>}
            </div>
        };
        <Footer/>
    </div>
  )
}

export default Login_form;