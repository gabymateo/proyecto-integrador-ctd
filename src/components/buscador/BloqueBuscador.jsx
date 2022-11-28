import React from 'react'
import './bloqueBuscador.css'
import {useState} from 'react'
import { NavLink, useSearchParams } from "react-router-dom";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useCitiesApi } from '../../apis/citiesApi';
import { useProductsApi } from '../../apis/productsApi';
//ICONOS
import { IoLocationSharp } from 'react-icons/io5';
import { IoMdCalendar } from 'react-icons/io';
import {format} from 'date-fns';
import { Calendar } from '../calendar/Calendar';

export const BloqueBuscador = ({getProductosFiltrados, getProductos}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  /*CALENDARIO */
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    { startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);  
  const apiCity = useCitiesApi();
  const {products, getProductsFilter}= useProductsApi();


  const handleChange = (event) => {
    console.log(event.target.value);

    searchParams.get("categoryId") ? 
    ( (event.target.value)==="0" ? 
        setSearchParams({categoryId:searchParams.get("categoryId")})
        : setSearchParams({categoryId:searchParams.get("categoryId"), cityId: event.target.value}) )
    : ( (event.target.value)==="0" ? setSearchParams({}) :setSearchParams({cityId: event.target.value}))
  }

    const handleClick = (event) => {
      event.preventDefault();
      const checkIn = (new Date(date[0].startDate)).toISOString().substring(0, 10);
      const checkOut = (new Date(date[0].endDate)).toISOString().substring(0, 10); 
      //setSearchParams({checkIn:checkIn, checkOut:checkOut})
      getProductosFiltrados(checkIn, checkOut);
    }
  const res = window.matchMedia('(max-width:550px)')
  const responsive = ()=>{
    
  }

  return (
    <div className='bloqueBuscador'>
          <h1>Busca ofertas en hoteles, casas y mucho mas.</h1>
          <div className='barraBuscadorContainer'>
            <div className='barraBuscadorItem'>
              <IoLocationSharp/>
                <select onChange={handleChange}>
                  <option defaultValue> Selecciona una ciudad </option>
                  <option value={0}> Traer todos </option>
                  {apiCity.cities.map((city)=> {
                    return <option  key={city.id} value={city.id}> <IoLocationSharp/> {city.name} </option>
                  })}
                </select>
            </div>
            <div className='barraBuscadorItem'>
              <IoMdCalendar/>
                <span 
                onClick={()=>setOpenDate(!openDate)} 
                className='buscador'>
                  {`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}
                </span>
                {openDate && <Calendar/>}
            </div>
            <NavLink to='/filter'>
              <button onClick={handleClick}>Buscar</button>
            </NavLink>
            
            
          </div>    
    </div>
  )
}