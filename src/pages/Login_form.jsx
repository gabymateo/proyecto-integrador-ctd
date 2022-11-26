import React from 'react';
import Header from '../components/header/Header';
import Login from '../components/sesion/Login';
import Footer from '../components/footer/Footer';
import Body from '../components/body/Body';
import { useProductsApi } from '../apis/productsApi'; 


const Login_form = () => {

  const [isAuthenticated, setIsAuthenticated] = React.useState(undefined);
  const [userLogged, setUserLogged] = React.useState("");
  const {products, getProducts, getProductsFilter} = useProductsApi();

  const handleLogin = (correo) =>{
      setUserLogged(correo);   
      if (correo) {
        setIsAuthenticated(true)
      }
  }

  React.useEffect(()=> {
    getProductsFilter()
    handleLogin()
  }, [])

  return (
    <div>
        <Header user={userLogged} setUser={setUserLogged}/>
        {isAuthenticated  ? <div> <Body productos={products} getProductosFiltrados={getProductsFilter} getProductos={getProducts}/> </div>: <Login onHandleLogin={handleLogin} initSesion={isAuthenticated} /> };
        <Footer/>
    </div>
  )
}

export default Login_form