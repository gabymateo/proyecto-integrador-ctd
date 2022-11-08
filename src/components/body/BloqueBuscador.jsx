import React from 'react'
import '../../styles/bloqueBuscador.css'
import {useState} from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export const BloqueBuscador = () => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  return (
    <div className='bloqueBuscador'>
          <h1>Busca ofertas en hoteles, casas y mucho mas.</h1>
          <div className='barraBuscadorContainer'>
            <div className='barraBuscadorItem'>
                <input
                 type='text' 
                 placeholder='¿Adonde vamos?' 
                 className='barraBuscadorInput'
                 />
            </div>
            <div className='barraBuscadorItem'>
                <span 
                onClick={()=>setOpenDate(!openDate)} 
                className='buscador'>
                  Check In - Check Out
                </span>
                {openDate && <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  ranges={date}
                  className='date'
                  direction='horizontal'
                />}
            </div>
            <button>Buscar</button>
            
          </div>    
    </div>
  )
}
/**
 * <div className='buscadorButton'>
                <button>Buscar</button>
            </div>
 */