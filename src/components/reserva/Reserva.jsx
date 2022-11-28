import React from 'react';
import { useState } from "react";
import "./reserva.css";
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { DateRange } from "react-date-range";
import "../../../node_modules/react-date-range/dist/styles.css"; // main css file
import "../../../node_modules/react-date-range/dist/theme/default.css"; // theme css file
import {BiCheckCircle} from 'react-icons/bi';
import Horarios from '../../DataMock/Horarios.json'
import { useBookingsApi } from '../../apis/bookingsApi'
import { useProductsApi } from '../../apis/productsApi';
import { IoLocationSharp } from 'react-icons/io5';
import {format, addDays} from 'date-fns';
import { Calendar } from '../calendar/Calendar';
import userContext from '../../apis/userContext';

const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

//------------- ACÁ EMPIEZA EL COMPONENTE RESERVA ----------------//
export const Reserva = () => {
  
  const {getProducts, products} = useProductsApi()
  const ident = useParams().id
  const detalle = products?.data
  const navigate = useNavigate();
  const { userLogged, userLastName, userEmail} = React.useContext(userContext); 
  const [formValues, setFormValues] = useState({});
  const [horaIni, setHoraIni] = useState();
  const [bookOk, setBookOk] = useState(); //utilizo este estado para el mensaje de error
  const {bookings, postBookings} = useBookingsApi();
  
  React.useEffect(() => {
    getProducts(ident)
  },[])

  // React.useEffect(()=>{
      
  // }, [])

  /*------ INIT CALENDARIO -----*/
  const [date, setDate] = useState([
    { startDate: new Date(),
      endDate: new Date(),
      key: "selection" },
  ]);
  /*----- FIN CALENDARIO ------*/

  /*----- Esta función es para controlar los input del form ------*/
  const handleChangeFormValues = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
    setHoraIni(e.target.value);
  }
  /*----- -------------------------------------------------------*/

/*----- EMPIEZO A ARMAR EL BODY PARA EL POST DE UNA RESERVA------*/
    const productId = useParams().id;
    const startHour = horaIni
    const startDate = (new Date(date[0].startDate)).toISOString().substring(0, 10);
    const endDate = (new Date(date[0].endDate)).toISOString().substring(0, 10); 
    const Authorization = localStorage.JWT;
/*----- FIN DE ARMAR EL BODY PARA EL POST DE UNA RESERVA------*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reservaOk= await postBookings(productId, startHour, startDate, endDate, Authorization)
    console.log(productId, startHour, startDate, endDate, Authorization);
    if (reservaOk) {
      setBookOk(true)
      navigate("./ok")
    }
    else {
      setBookOk(false)
    }
  }
  

  return (
    <div className="reserva">
      <form className="reserva__container" onSubmit={handleSubmit}>
        <div className="reserva__form">
          <h2 className="booking_title">Completa tus datos</h2>
            <div className="form__container">
              <label> Nombre  <input name="name" type='text' value={userLogged} onChange={handleChangeFormValues} /> </label>
              <label> Apellido  <input name="lastName" type='text' value={userLastName} onChange={handleChangeFormValues} /> </label>
              <label> Correo electrónico  <input name="email" type='email' value={userEmail} onChange={handleChangeFormValues} /> </label>
              <label> Ciudad  <input name="city" type='text' value={formValues.city} onChange={handleChangeFormValues}/> </label>
            </div>
        </div>
        <div className="calendario__container">
          <h1>Seleccioná tu fecha de reserva</h1>
          <div className='calendarioReserva'>
            <Calendar/>
            {/*<DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              months={2}
              minDate={new Date()}
              ranges={date}
              showDateDisplay={false}
              rangeColors={["#FBC02D", "#FBC02D", "#FBC02D"]}
              className="date"
              direction="horizontal"
  />*/}
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
              <select onChange={handleChangeFormValues}>
                <option defaultValue>Seleccionar hora de llegada</option>
                {Horarios.map((h) => {
                  return <option key={h.id} value={h.horario}> {h.horario} </option>;
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
          {(bookOk==true || bookOk == undefined) ? undefined : <p className='error'>Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde</p>}
            <button type='submit'>Confirmar Reserva</button>
        </div>
      </form>
    </div>
  );
};
