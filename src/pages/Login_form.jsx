import React from 'react';
import Header from '../components/header/Header';
import Login from '../components/sesion/Login';
import Footer from '../components/footer/Footer';
import Body from '../components/body/Body';
import { useProductsApi } from '../apis/productsApi'; 
import userContext from '../apis/userContext';


const Login_form = () => {

  const [isAuthenticated, setIsAuthenticated] = React.useState(undefined);
  const {products, getProducts, getProductsFilter} = useProductsApi();
  const { userLogged, userIdLogged} = React.useContext(userContext);

  const verifiedAuth = () => {
  if (userLogged) {
    setIsAuthenticated(true)
  }
}

  React.useEffect(()=> {
    getProductsFilter();
    verifiedAuth()
  }, [])

  return (
    <div>
        <Header/>
        {isAuthenticated  ? 
          <div> <Body productos={products} getProductosFiltrados={getProductsFilter} getProductos={getProducts}/> </div>
          : <Login/>};
        <Footer/>
    </div>
  )
}

export default Login_form