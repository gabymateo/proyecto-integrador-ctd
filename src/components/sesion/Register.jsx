import React from 'react';
import './form.css';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { isValid } from 'date-fns';
import Eye from '../../images/icon-eye.png';
import closeEye from '../../images/icon-close-eye.png';
import { useUserSingUpApi } from '../../apis/UserSingUpApi';


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

    const [badName, setBadName] = useState(undefined);
    const [badLastName, setBadLastName] = useState(undefined);
    const [badEmail, setBadEmail] = useState(undefined);
    const [badPassword, setBadPassword] = useState(undefined);
    const [difPassword, setDifPassword] = useState(undefined);
    const [validationAll, setValidationAll] = useState(false);
    const [enviarDatos, setEnviarDatos] = useState(false);
    const {postCreateUser} = useUserSingUpApi();

    const handleChangeFormValues = (e) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setEnviarDatos(true) //Estado para activar el boton de enviar el formulario
      postCreateUser(formValues.email, formValues.password, formValues.name, formValues.lastName) //llamado a API para crear usuarios
      console.log("ENVIADOS");
    }

    //---------------------------------INIT Validaciones ----------------------
    
      
      React.useEffect(()=>{
        const isValid = ((badName==false) && (badLastName==false) && (badEmail==false) && (badPassword==false) && (difPassword==false))
        setValidationAll(isValid)
        console.log("total validaciones: ",isValid);
    }, [badName, badLastName, badEmail, badPassword, difPassword])


    const hadleBlurName= () =>{
      const hasError = !((formValues.name).length>1)
      setBadName(hasError)
      handleValidationAll();
    }

    const hadleBlurLastName= () =>{
      const hasError = !((formValues.lastName).length>1)
      setBadLastName(hasError)
      handleValidationAll();
    }

    const hadleBlurEmail = () =>{
      const hasError = ! emailRegexp.test(formValues.email);
      setBadEmail(hasError)
      handleValidationAll();
    }

    const hadleBlurPass = () => {
      const hasError = (formValues.password).length <6;
      setBadPassword(hasError);
      handleValidationAll()
    }

    const hadleBlurDifPass = () => {
      const difPass = !(formValues.password == formValues.confirmPassword);
      setDifPassword(difPass);
      handleValidationAll()
    }

    const handleValidationAll = () => {
      const isValid = ((badName==false) && (badLastName==false) && (badEmail==false) && (badPassword==false) && (difPassword==false))
      setValidationAll(isValid)
    }
   //--------------------------------- FIN Validaciones ----------------------

    return(
    <div className="container">
        <h2 className="title">Crear Cuenta</h2>
        <form className="form" onSubmit={handleSubmit}> 
          <label> Nombre  <input name="name" type='text' value={formValues.name} onChange={handleChangeFormValues} onBlur={hadleBlurName}/>
            <span style={{ visibility: badName ? "visible" :"hidden"}}>Por favor ingrese su nombre</span> <br></br> </label>
          <label> Apellido  <input name="lastName" type='text' value={formValues.lastName} onChange={handleChangeFormValues} onBlur={hadleBlurLastName}/>
            <span style={{ visibility: badLastName ? "visible" : "hidden"}}>Por favor ingrese su apellido</span> <br></br> </label>
          <label> Correo electrónico  <input name="email" type='email' value={formValues.email} onChange={handleChangeFormValues} onBlur={hadleBlurEmail}/> 
            <span style={{ visibility: badEmail ? "visible" : "hidden"}}>No es un email correcto</span> <br></br> </label>
          <div>
          <label> Contraseña </label>
          <div className='passwordInput'>
            <input name='password' type={showPwd ? "text" : "password"} value={formValues.password}  onChange={handleChangeFormValues} onBlur={hadleBlurPass}/> 
            <div className="icon" onClick={() => setShowPwd(!showPwd)}> 
                {showPwd ? <img src={Eye} height={"15rem"}/> :<img src={closeEye} height={"15rem"} />}
            </div>
          </div>
            <span  style={{ visibility: badPassword ? "visible" : "hidden"}}>El password debe ser de al menos 6 caracteres</span>
            <br></br>
          </div>
          <label> Confirmar contraseña <input name="confirmPassword" type='password' value={formValues.confirmPassword} onChange={handleChangeFormValues} onBlur={hadleBlurDifPass} /> 
            <span style={{ visibility: difPassword ? "visible" : "hidden"}}>El password no coincide</span> <br></br></label>
          {enviarDatos==true
            ? <p>Datos enviados</p>
            : <p>Debes diligenciar todos los campos</p>}
          <button className="submit" type='submit' disabled={!validationAll}>Crear cuenta</button>
          <div className='footer_form'>
            <p>¿Ya tienes cuenta? <NavLink to="/login" className="active">Iniciar sesión</NavLink></p>
          </div>
        </form>
    </div>
  )
}

export default LoginRegister