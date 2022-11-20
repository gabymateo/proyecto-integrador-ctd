import React from 'react'
import './bloqueBuscador.css'
import {useState} from 'react'
import { NavLink, useSearchParams } from "react-router-dom";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useCitiesApi } from '../../apis/citiesApi';
import { useProductsApi } from '../../apis/productsApi';
import { AiFillPropertySafety } from 'react-icons/ai';
import {format} from 'date-fns';

export const BloqueBuscador = ({getProductosFiltrados, getProductos}) => {
  const [openDate, setOpenDate] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();
  /*CALENDARIO */
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
      getProductosFiltrados();
    }
    
    //console.log(date[0].startDate);
    //console.log(date[0].endDate);


  return (
    <div className='bloqueBuscador'>
          <h1>Busca ofertas en hoteles, casas y mucho mas.</h1>
          <div className='barraBuscadorContainer'>
            <div className='barraBuscadorItem'>
                <select onChange={handleChange}>
                  <option defaultValue> Selecciona una ciudad </option>
                  <option value={0}> Traer todos </option>
                  {apiCity.cities.map((city)=> {
                    return <option  key={city.id} value={city.id}> {city.name} </option>
                  })}
                </select>
            </div>
            <div className='barraBuscadorItem'>
                <span 
                onClick={()=>setOpenDate(!openDate)} 
                className='buscador'>
                  {`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}
                </span>
                {openDate && <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  rangeColors={['#FBC02D', '#FBC02D', '#FBC02D']}
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