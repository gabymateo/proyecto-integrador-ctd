import React from 'react';
import './form.css';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import Eye from '../../images/icon-eye.png';
import closeEye from '../../images/icon-close-eye.png';
import { useLoginApi } from '../../apis/loginApi';

const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

const LoginForm = (props) => {

    const [showPwd, setShowPwd] = useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [BadEmail, setBadEmail] = useState(undefined);
    const [badPassword, setBadPassword] = useState(undefined);
    const [validationAll, setValidationAll] = useState(true);
    const {token, postLogin} = useLoginApi();
    
    const handleValueEmail = (e) => {
      setEmail(e.target.value)
    }

    const handleValuePassword = (e) => {
      setPassword(e.target.value);
    }


    //---------------------------------INIT Validaciones ----------------------
    const handleSubmit = (e) => {
      e.preventDefault()
      const isValid = ((!BadEmail) && !(BadEmail == undefined)) && ((!badPassword) && !(badPassword == undefined))
      setValidationAll(isValid)
      //props.onHandleLogin(email, password)
      postLogin(email, password)
      console.log("token en el componente login: ", token);
    }

    const hadleBlurEmail = () =>{
      const hasError = !emailRegexp.test(email);
      setBadEmail(hasError)
    }

    const hadleBlurPass = () => {
      const hasError = (password).length <6;
      setBadPassword(hasError);
    }

    //------------------------------ FIN Validaciones -------------------
    
    return(    
    <div className="container">
      <h2 className="title">Iniciar sesión</h2>
      <form className="form" id="login" onSubmit={handleSubmit}> 
        <label> Correo electrónico  <input type='email' value={email} onChange={handleValueEmail} onBlur={hadleBlurEmail}/> <span style={{ visibility: BadEmail ? "visible" : "hidden"}}>El email no es correcto</span> <br></br> </label>
        <div>
          <label> Contraseña </label>
          <div className='passwordInput'>
            <input type={showPwd ? "text" : "password"} value={password}  onChange={handleValuePassword} onBlur={hadleBlurPass}/> 
            <div className="icon" onClick={() => setShowPwd(!showPwd)}> 
                {showPwd ? <img src={Eye} height={"15rem"}/> :<img src={closeEye} height={"15rem"} />}
            </div>
          </div>
          <span  style={{ visibility: badPassword ? "visible" : "hidden"}}>El password debe ser de al menos 6 caracteres</span>
          <br></br>
        </div>
        {props.initSesion == undefined || props.initSesion==true ? undefined : <p>las credenciales son invalidas, intente nuevamente</p>}
          <button form='login' className="submit" type='submit' > Ingresar </button>
          <div className='footer_form'>
            <p>¿Aún no tienes cuenta? <NavLink to="/register" className="active">Registrate</NavLink></p>
          </div>
      </form>
    </div>
        
    )
}


export default LoginForm
