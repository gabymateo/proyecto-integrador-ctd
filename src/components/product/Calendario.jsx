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
              color={["#FBC02D"]}
              rangeColors={["#FBC02D", "#FBC02D", "#FBC02D"]}
              className="date"
              direction="horizontal"
            />
          </div>
          <div className="fechasReserva__reserva">
            <p>Agregá tus fechas de viaje para obtener precios exactos</p>
            <NavLink>
            <button>Iniciar Reserva</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
