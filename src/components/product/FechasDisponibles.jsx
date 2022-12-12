import React from 'react';
import {useState} from 'react';
import './alojamiento.css';
import { DateRange } from 'react-date-range';
import { NavLink, useParams } from 'react-router-dom';
import '../../../node_modules/react-date-range/dist/styles.css'; // main css file
import '../../../node_modules/react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from '../calendar/Calendar';
import { useBookingsApi } from '../../apis/bookingsApi'
import userContext from '../../apis/userContext';
import {addDays} from 'date-fns';

export const FechasDisponibles = () => {
  const [openDate, setOpenDate] = useState(false)
  const ident = useParams().id
  const {reservedDate, getBookingByProductId} = useBookingsApi();
  
  React.useEffect(() => {
    getBookingByProductId(ident)
  },[])
  // console.log(reservedDate);

  /*------ INIT CALENDARIO -----*/
  const [date, setDate] = useState([
    { startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  /*----- TRANSFORMAR FECHAS RESERVADAS  */
  const disabledDates = reservedDate?apiDatesToDisabled(reservedDate):undefined

  function getDatesInRange(startDate, endDate) {
    const fechas = [];
    let currentDate = addDays(startDate, 1);
    let stopDate = addDays(endDate, 1);
    // const date = new Date(startDate.getTime());
  
    while (currentDate <= stopDate) {
      fechas.push(currentDate);
      currentDate = addDays(currentDate , 1);
    }
  
    return fechas;
  }
  function apiDatesToDisabled(reservedDate) {
    let disabledDates = [];
    const transfomedDates = reservedDate.map((reserved)=>{
      return {
        startDate: new Date(reserved.startDate),
        endDate: new Date(reserved.endDate),
      };
    });
    transfomedDates.forEach((reserved)=>{
      const fechas = getDatesInRange(
        reserved.startDate,
        reserved.endDate
      );
      disabledDates = [...disabledDates, ...fechas];
    });
    return disabledDates;
  }
  



  const [logued, setLogued] = useState(false);
  const {userLogged} = React.useContext(userContext);

  return (
    <>
      <div className="alojamiento__fechasReserva">
        <div className="fechasReserva__container">
          <h1>Fechas Disponibles</h1>
          <div>
            <div className='calendario'>
              <Calendar
              date={date}
              setDate={setDate}
              disabledDates={disabledDates}
              />
            </div>
            <div className="fechasReserva__reserva">
              <p>Agregá tus fechas de viaje para obtener precios exactos</p>
              <NavLink to={`reserva`}><button>Iniciar Reserva</button></NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
