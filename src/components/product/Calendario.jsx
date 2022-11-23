import {React , useState} from 'react';
import './alojamiento.css';
import { DateRange } from 'react-date-range';
import { NavLink } from 'react-router-dom';
import '../../../node_modules/react-date-range/dist/styles.css'; // main css file
import '../../../node_modules/react-date-range/dist/theme/default.css'; // theme css file

export const Calendario = () => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    { startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [logued, setLogued] = useState(false);

  localStorage.JWT = 'qwertyuiop'  //voy a simular mientras tanto que alguien está logueado. ESTO LO DEBO BORRAR
  //localStorage.clear(); //ESTO LO DEBO BORRAR DE ACÁ, solo para simular


  return (
    <>
      <div className="alojamiento__fechasReserva">
        <div className="fechasReserva__container">
          <h1>Fechas Disponibles</h1>
          <div className='calendario'>
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
          <div className="fechasReserva__reserva">
            <p>Agregá tus fechas de viaje para obtener precios exactos</p>
            {localStorage.JWT ? (<NavLink to={`reserva`}><button>Iniciar Reserva</button></NavLink>)
                    :(<NavLink to={`./../../login`}><button>Iniciar Reserva</button></NavLink>)}
          </div>
        </div>
      </div>
    </>
  );
}
