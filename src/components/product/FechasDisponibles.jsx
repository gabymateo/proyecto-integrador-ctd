import React from 'react';
import {useState} from 'react';
import './alojamiento.css';
import { DateRange } from 'react-date-range';
import { NavLink } from 'react-router-dom';
import '../../../node_modules/react-date-range/dist/styles.css'; // main css file
import '../../../node_modules/react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from '../calendar/Calendar';
import userContext from '../../apis/userContext';

export const FechasDisponibles = () => {
  {/*const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    { startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);*/}
  const [logued, setLogued] = useState(false);
  const {userLogged} = React.useContext(userContext);


  return (
    <>
      <div className="alojamiento__fechasReserva">
        <div className="fechasReserva__container">
          <h1>Fechas Disponibles</h1>
          <div>
            <div className='calendario'>
              <Calendar/>
              {/*<DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                months={1}
                ranges={date}
                minDate={new Date()}
                showDateDisplay={false}
                rangeColors={["#FBC02D", "#FBC02D", "#FBC02D"]}
                className="date"
                direction="horizontal"
              />*/}
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
