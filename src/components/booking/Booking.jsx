import React from 'react';0
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import Check from '../../images/check.png'


const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

const initValues={
  name: "",
  lastName: "",
  email:"",
  city:""
}

const Booking = (props) => {
  
    const [formValues, setFormValues] = useState(initValues);

    const [badName, setBadName] = useState(undefined);
    const [badLastName, setBadLastName] = useState(undefined);
    const [badEmail, setBadEmail] = useState(undefined);
    const [badCity, setBadCity] = useState(undefined);
    const [validationAll, setValidationAll] = useState(false);
    const [enviarDatos, setEnviarDatos] = useState(false);

    const handleChangeFormValues = (e) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setEnviarDatos(true)
      console.log("ENVIADOS");
    }

      React.useEffect(()=>{
      //const  handleAll=() =>{
        const isValid = ((badName==false) && (badLastName==false) && (badEmail==false)  && (badCity==false))
        setValidationAll(isValid)
        console.log("total validaciones: ",isValid);
      //}
    }, [badName, badLastName, badEmail, badCity])


    const handleBlurName= () =>{
      const hasError = !((formValues.name).length>1)
      setBadName(hasError)
      //handleValidationAll();
    }

    const handleBlurLastName= () =>{
      const hasError = !((formValues.lastName).length>1)
      setBadLastName(hasError)
      //handleValidationAll();
    }

    const handleBlurEmail = () =>{
      const hasError = ! emailRegexp.test(formValues.email);
      setBadEmail(hasError)
      //handleValidationAll();
    }

    const handleBlurCity = () =>{
      const hasError = ! emailRegexp.test(formValues.city);
      setBadCity(hasError)
      //handleValidationAll();
    }

  

   //--------------------------------- FIN Validaciones ----------------------

    return(
    <form className="form" onSubmit={handleSubmit} >
      <div className='column1'>
        <div className="container_booking">
          <h2 className="title_booking">Completa tus datos</h2>
          <label> Nombre  <input name="name" type='text' value={formValues.name} onChange={handleChangeFormValues} onBlur={handleBlurName}/>
            <span style={{ visibility: badName ? "visible" :"hidden"}}>Por favor ingrese su nombre</span> <br></br> </label>
          <label> Apellido  <input name="lastName" type='text' value={formValues.lastName} onChange={handleChangeFormValues} onBlur={handleBlurLastName}/>
            <span style={{ visibility: badLastName ? "visible" : "hidden"}}>Por favor ingrese su apellido</span> <br></br> </label>
          <label> Correo electrónico  <input name="email" type='email' value={formValues.email} onChange={handleChangeFormValues} onBlur={handleBlurEmail}/> 
            <span style={{ visibility: badEmail ? "visible" : "hidden"}}>No es un email correcto</span> <br></br> </label>
          <div>
            <label> Ciudad </label>
            <div className='cityInput'>
              <input name='city' type= "text" value={formValues.city}  onChange={handleChangeFormValues} onBlur={handleBlurCity}/> 
            </div>
            {/* <span  style={{ visibility: badCity ? "visible" : "hidden"}}>Debe ingresar una ciudad</span> */}
            {/* <br></br> */}
          </div>
        </div>

        <div className='calendar'>
          <h2 className="calendar_title">Selecciona tu fecha de reserva</h2>

        </div>

        <div className='arrival'>
          <h2 className="calendar_arrival">Tu horario de llegada</h2>
          <h3> <img src={Check} height={"20rem"}/> Tu habitación va a estar lista para el check-in entre las 10:00AM y las 11:00pm</h3>
          <p> Indica tu horario estimado de llegada </p>


        </div>

      </div>

      <div className='column2'>
        <h2 className="column_title">Detalle de la reserva</h2>

      </div>

    </form>
  )
}

export default Booking