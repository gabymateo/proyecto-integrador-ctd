import React from 'react';
import '../styles/form.css';
import { NavLink } from 'react-router-dom';
import { useState } from "react";

const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

const initValues={
  name: "",
  lastName: "",
  email:"",
  password:"",
  confirmPassword:""
}

const LoginRegister = (props) => {
    const [showPwd, setShowPwd] = useState(false);
    const [formValues, setFormValues] = useState(initValues);
    const [actBotton, setActBotton] = useState(false);

    const [BadEmail, setBadEmail] = useState(false);
    const [badPassword, setBadPassword] = useState(false);
    const [difPassword, setDifPassword] = useState(false);
    const [validationAll, setValidationAll] = useState(false);

    const handleChangeFormValues = (e) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      })
    }

    //---------------------------------INIT Validaciones ----------------------
    const handleSubmit = (e) => {
      e.preventDefault();
      //const isValid = ((formValues.name).length>1 && (formValues.lastName).length>1 && ((!BadEmail) && !(BadEmail == undefined)) && ((!badPassword) && !(badPassword == undefined)) && ((!difPassword) && !(difPassword == undefined)))
      const isValid = ((formValues.name).length>1 && (formValues.lastName).length>1 && !BadEmail && !badPassword && !difPassword)
      console.log("total validaciones: ",isValid);
      console.log("BadEmail: ", BadEmail);
      console.log("Badlong pass: ", badPassword);
      console.log("Badsame pass: ", difPassword)
      setValidationAll(isValid)
      hadleBlurEmail();
      hadleBlurPass();
      hadleBlurDifPass(); 
    }

    const hadleBlurEmail = () =>{
      const hasError = ! emailRegexp.test(formValues.email);
      setBadEmail(hasError)
    }

    const hadleBlurPass = () => {
      const hasError = (formValues.password).length <6;
      setBadPassword(hasError);
    }

    const hadleBlurDifPass = () => {
      const difPass = !(formValues.password == formValues.confirmPassword);
      setDifPassword(difPass);
    }

    // React.useEffect(()=>{
 
    //     const isValid = ((formValues.name).length>1 && (formValues.lastName).length>1 && !BadEmail && !badPassword && !difPassword)
    //     setActBotton(isValid);
    //     console.log("activación del botton", isValid);
      
    // },[hadleBlurEmail,hadleBlurPass, hadleBlurDifPass])


   //--------------------------------- FIN Validaciones ----------------------

    return(
    <div className="container">
        <h2 className="title">Crear Cuenta</h2>
        <form className="form" onSubmit={handleSubmit} > 
          <label> Nombre  <input name="name" type='text' value={formValues.name} onChange={handleChangeFormValues} /></label>
          <label> Apellido  <input name="lastName" type='text' value={formValues.lastName} onChange={handleChangeFormValues} /></label>
          <label> Correo electrónico  <input name="email" type='email' value={formValues.email} onChange={handleChangeFormValues} onBlur={hadleBlurEmail}/> 
            <span style={{ visibility: BadEmail ? "visible" : "hidden"}}>No es un email correcto</span> <br></br> </label>
          <label> Contraseña <input name="password" type={showPwd ? "text" : "password"} value={formValues.password} onChange={handleChangeFormValues} onBlur={hadleBlurPass} /> 
            <span style={{ visibility: badPassword ? "visible" : "hidden"}}>El password debe tener al menos 6 caracteres</span> <br></br></label>
          
          <div className="position-absolute pointer pwd-icon" onClick={() => setShowPwd(!showPwd)}>
            {showPwd ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1rem"}>
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
              <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1rem"}>
              <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
              <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
              <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
            </svg>}
          </div>

          <label> Confirmar contraseña <input name="confirmPassword" type='password' value={formValues.confirmPassword} onChange={handleChangeFormValues} onBlur={hadleBlurDifPass} /> 
            <span style={{ visibility: difPassword ? "visible" : "hidden"}}>El password no coincide</span> <br></br></label>
          {validationAll==true
            ? <p>Datos enviados</p>
            : <p>Debes diligenciar todos los campos</p>}
          <button className="submit" type='submit' disabled={actBotton}>Crear cuenta</button>
          <div className='footer_form'>
            <p>¿Ya tienes cuenta? <NavLink to="/login" className="active">Iniciar sesión</NavLink></p>
          </div>
        </form>
    </div>
  )
}

export default LoginRegister