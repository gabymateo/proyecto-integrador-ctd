import {React , useState} from 'react';
import "./reserva.css";
import { NavLink } from 'react-router-dom';
import { DateRange } from "react-date-range";
import "../../../node_modules/react-date-range/dist/styles.css"; // main css file
import "../../../node_modules/react-date-range/dist/theme/default.css"; // theme css file
import {BiCheckCircle} from 'react-icons/bi';
import Horarios from '../../DataMock/Horarios.json'

export const Reserva = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);

  
  return (
    <div className="reserva">
      <div className="reserva__container">
        <div className="reserva__form">
          <h1>Completá tus Datos</h1>
          <div className="form__container">
            <label>
              Nombre
              <input type="text"></input>
            </label>
            <label>
              Apellido
              <input type="text"></input>
            </label>
            <label>
              Correo Electronico
              <input type="mail"></input>
            </label>
            <label>
              Ciudad
              <input type="text"></input>
            </label>
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
            <p>
              <BiCheckCircle /> Tu habitacion va a estar lista para el check in
              entre las 10:00 y las 11:00pm
            </p>
            <label>
              Indica tu horario estimado de llegada
              <select>
                <option defaultValue>Seleccionar hora de llegada</option>
                {Horarios.map((h) => {
                  return <option key={h.id}>{h.horario}</option>;
                })}
              </select>
            </label>
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
          <NavLink>
            <button>Confirmar Reserva</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
