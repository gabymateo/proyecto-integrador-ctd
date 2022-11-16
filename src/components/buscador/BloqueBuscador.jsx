import React from 'react'
import './bloqueBuscador.css'
import {useState} from 'react'
import { NavLink, useSearchParams } from "react-router-dom";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useCitiesApi } from '../../apis/citiesApi';
import { useProductsApi } from '../../apis/productsApi';

export const BloqueBuscador = () => {
  const [openDate, setOpenDate] = useState(false)
  const [option, setOption] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [date, setDate] = useState([
    { startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  
  const apiCity = useCitiesApi();
  const {products, getProductsFilterCity}= useProductsApi();


  const handleChange = (event) => {
    setOption(event.target.value) 
    setSearchParams({cityId: event.target.value})
  }

  const handleClick = (event) => {
    event.preventDefault();
    getProductsFilterCity(option);
  }
  

  return (
    <div className='bloqueBuscador'>
          <h1>Busca ofertas en hoteles, casas y mucho mas.</h1>
          <div className='barraBuscadorContainer'>
            <div className='barraBuscadorItem'>
                <select onChange={handleChange}>
                  <option defaultValue> Selecciona una ciudad </option>
                  {apiCity.cities.map((city)=> {
                    return <option  key={city.id} value={city.id}> {city.name} </option>
                  })}
                </select>
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
            <NavLink to='/filter'>
              <button onClick={handleClick}>Buscar</button>
            </NavLink>
            
            
          </div>    
    </div>
  )
}
/**
 * <div className='buscadorButton'>
                <button>Buscar</button>
            </div>
 */