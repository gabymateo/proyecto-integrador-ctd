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


const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

const initValues={
  name: "",
  lastName: "",
  email:"",
  city:""
}

export const Reserva = () => {
  //calendario
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
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


    React.useEffect(()=>{
      
  }, [])


    const productId = useParams().id;
    const userId = localStorage.userId;
    const guestName = formValues.name;
    const guestLastName = formValues.lastName;
    const guestEmail = formValues.email;
    const guestCity = formValues.city;
    const startHour = "12:00";
    //const startDate = (new Date(date[0].startDate)).toISOString().substring(0, 10);
    //const endDate = (new Date(date[0].endDate)).toISOString().substring(0, 10); 
    const Authorization = localStorage.JWT;
    const startDate = 2022-11-11;
    const endDate = 2022-11-13; 
        
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviarDatos(true)
    const respuestaReserva= postBookings(productId, userId, guestName, guestLastName, guestEmail, guestCity, startHour, startDate, endDate, Authorization)
    console.log(Authorization);
    console.log("ENVIADOS");
  }
  

  return (
    <div className="reserva">
      <form className="reserva__container" onSubmit={handleSubmit}>
        <div className="reserva__form">
        <h2 className="booking_title">Completa tus datos</h2>
          <div className="form__container">
          <label> Nombre  <input name="name" type='text' value={formValues.name} onChange={handleChangeFormValues} />
            <span style={{ visibility: badName ? "visible" :"hidden"}}>Por favor ingrese su nombre</span> <br></br> </label>
          <label> Apellido  <input name="lastName" type='text' value={formValues.lastName} onChange={handleChangeFormValues} />
            <span style={{ visibility: badLastName ? "visible" : "hidden"}}>Por favor ingrese su apellido</span> <br></br> </label>
          <label> Correo electrónico  <input name="email" type='email' value={formValues.email} onChange={handleChangeFormValues} /> 
            <span style={{ visibility: badEmail ? "visible" : "hidden"}}>No es un email correcto</span> <br></br> </label>
            <label> Ciudad  <input name="city" type='text' value={formValues.city} onChange={handleChangeFormValues} /> 
            <span style={{ visibility: badCity ? "visible" : "hidden"}}>Ingresa una ciudad</span> <br></br> </label>
          </div>
        </div>
        <div className="calendario__container">
          <h1>Seleccioná tu fecha de reserva</h1>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={date}
            showDateDisplay={false}
            rangeColors={["#FBC02D", "#FBC02D", "#FBC02D"]}
            className="date"
            direction="horizontal"
          />
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
          <img></img>
          <p>Categoria</p>
          <h1>Titulo Hotel</h1>
          <p>Ubicacion, en ubicacion, Buenos Aires</p>
          {/*Crear y reutilizar componente de ubicaion */}
          <hr />
          <div>
            <p>Check In</p>
            <span>_/_/_</span>
          </div>
          <hr />
          <div>
            <p>Check Out</p>
            <span>_/_/_</span>
          </div>
          <hr />
          {/* <NavLink to={'ok'}> */}
            <button className="submit" type='submit' disabled={!validationAll}>Confirmar Reserva</button>
          {/* </NavLink> */}
        </div>
      </form>
    </div>
  );
};
