import React from 'react';
import { useState } from "react";
import "./reserva.css";
import { NavLink, useParams } from 'react-router-dom';
import { DateRange } from "react-date-range";
import "../../../node_modules/react-date-range/dist/styles.css"; // main css file
import "../../../node_modules/react-date-range/dist/theme/default.css"; // theme css file
import {BiCheckCircle} from 'react-icons/bi';
import Horarios from '../../DataMock/Horarios.json'
import { useBookingsApi } from '../../apis/bookingsApi'
import { useProductsApi } from '../../apis/productsApi';
import { IoLocationSharp } from 'react-icons/io5';
import {format} from 'date-fns';

const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

//


const initValues={
  name: "",
  lastName: "",
  email:"",
  city:""
}

export const Reserva = () => {
  //apiProducts
  const {getProducts, products} = useProductsApi()
  const ident = useParams().id
  
  React.useEffect(() => {
    getProducts(ident)
  },[])
  const detalle = products?.data
  //console.log(products?.data);

  /*CALENDARIO */
  const [date, setDate] = useState([
    { startDate: new Date(), 
      endDate: new Date(), 
      key: "selection" },
  ]);

  const [formValues, setFormValues] = useState(initValues);
  const [badName, setBadName] = useState(undefined);
  const [badLastName, setBadLastName] = useState(undefined);
  const [badEmail, setBadEmail] = useState(undefined);
  const [badCity, setBadCity] = useState(undefined);
  const [validationAll, setValidationAll] = useState(false);
  const [enviarDatos, setEnviarDatos] = useState(false);
  const {bookings, postBookings} = useBookingsApi();

  const handleChangeFormValues = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

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
    const hasError = !((formValues.city).length>1);
    setBadCity(hasError)
    //handleValidationAll();
  }

    React.useEffect(()=>{
      const isValid = ((badName==false) && (badLastName==false) && (badEmail==false)  && (badCity==false))
      setValidationAll(isValid)
      //console.log("total validaciones: ",isValid);
  }, [badName, badLastName, badEmail, badCity])

    const productId = useParams().id;
    const userId = 1;
    const guestName = formValues.name;
    const guestLastName = formValues.lastName;
    const guestEmail = formValues.email;
    const guestCity = formValues.city;
    const startHour = '';
    //const startDate = (new Date(date[0].startDate)).toISOString().substring(0, 10);
    //const endDate = (new Date(date[0].endDate)).toISOString().substring(0, 10); 
    //const Authorization = localStorage.JWT;
    const startDate = 2022-11-11;
    const endDate = 2022-11-13; 
    const Authorization = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIkMmEkMTIkeG5jOTdYZUJKWHZoRWJNRTloY3h6T21uMUMwMTNyM3hsTkJsV0s0emZZL0kvano0ckU2Uk8iLCJleHAiOjM0Nzk1NzU1NTIwODY1OTEsInJvbGUiOiJBRE1JTiIsIm5hbWUiOiJ0ZXN0MSJ9.12C6pYBktEoXqKt4Q2ugrjutRGIdOiFoYs74iKps7s4NnRWT-SNAcSe7QfN1UlGS";
    
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviarDatos(true)
    postBookings(productId, userId, guestName, guestLastName, guestEmail, guestCity, startHour, startDate, endDate, Authorization)
    console.log("ENVIADOS");
  }
  
  
  return (
    <div className="reserva">
      <form className="reserva__container" onSubmit={handleSubmit}>
        <div className="reserva__form">
          <h2 className="booking_title">Completa tus datos</h2>
            <div className="form__container">
            <label> Nombre  <input name="name" type='text' value={formValues.name} onChange={handleChangeFormValues} onBlur={handleBlurName}/>
              <span style={{ visibility: badName ? "visible" :"hidden"}}>Por favor ingrese su nombre</span> <br></br> </label>
            <label> Apellido  <input name="lastName" type='text' value={formValues.lastName} onChange={handleChangeFormValues} onBlur={handleBlurLastName}/>
              <span style={{ visibility: badLastName ? "visible" : "hidden"}}>Por favor ingrese su apellido</span> <br></br> </label>
            <label> Correo electrónico  <input name="email" type='email' value={formValues.email} onChange={handleChangeFormValues} onBlur={handleBlurEmail}/> 
              <span style={{ visibility: badEmail ? "visible" : "hidden"}}>No es un email correcto</span> <br></br> </label>
              <label> Ciudad  <input name="city" type='text' value={formValues.city} onChange={handleChangeFormValues} onBlur={handleBlurCity}/> 
              <span style={{ visibility: badCity ? "visible" : "hidden"}}>Ingresa una ciudad</span> <br></br> </label>
            </div>
        </div>
        <div className="calendario__container">
          <h1>Seleccioná tu fecha de reserva</h1>
          <div className='calendarioReserva'>
            <DateRange
              editableDateInputs={true}
              onChannge={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={date}
              showDateDisplay={false}
              rangeColors={["#FBC02D", "#FBC02D", "#FBC02D"]}
              className="date"
              direction="horizontal"
            />
          </div>
        </div>
        <div className="reserva__horario">
          <h1>Tu horario de llegada</h1>
          <div className="horario__container">
            <p className='principal'>
              <BiCheckCircle /> Tu habitacion va a estar lista para el check in
              entre las 10:00 AM y las 11:00 PM
            </p>
            <label>
              Indica tu horario estimado de llegada
              </label>
              <select>
                <option defaultValue>Seleccionar hora de llegada</option>
                {Horarios.map((h) => {
                  return <option key={h.id}>{h.horario}</option>;
                })}
              </select>
          </div>
        </div>
        <div className="reserva__detalles">
          
          <h1>Detalle de la reserva</h1>
          {/*<div className='container__img2'></div>*/}
          <div className='container__img '>
            <img src={detalle?.images[0].url}></img>
          </div>
          <p className='category'>{detalle?.category?.title}</p>
          <h1 className='name'>{detalle?.name}</h1>
          <p className='address'><IoLocationSharp/>{detalle?.address}, {detalle?.city?.name}, {detalle?.city?.state}, {detalle?.city.country}</p>
          {/*Crear y reutilizar componente de ubicaion */}
          <hr />
          <div className='check'>
            <p>Check In</p>
            <span>{`${format(date[0].startDate, 'dd/MM/yyyy')}`}</span>
          </div>
          <hr />
          <div className='check'>
            <p>Check Out</p>
            <span>{`${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
          </div>
          <hr />
          <NavLink to={'ok'}>
            <button type='submit' disabled={!validationAll}>Confirmar Reserva</button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};
