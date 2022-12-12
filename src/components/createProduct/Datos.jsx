import React, { useState } from "react";
import { useCitiesApi } from '../../apis/citiesApi';
import { useCategoriesApi } from "../../apis/categoriesApi";

// const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

// const initValues = {
//   name: "",
//   category: "",
//   address: "",
//   city: "",
// };

export const Datos = (props) => {
  //CONSUMIR API CIUDADES 
  const apiCity = useCitiesApi();
  //CONSUMIR API CATEGORIAS
  const apiCat = useCategoriesApi();

  // const [formValues, setFormValues] = useState(initValues);
  // const [name, setName] = useState(undefined);
  // const [category, setCategory] = useState(undefined);
  // const [address, setAddress] = useState(undefined);
  // const [city, setCity] = useState(undefined);
  // const [validationAll, setValidationAll] = useState(false);
//---------------------------------INIT Controlar valores del form----------------------
  // const handleChangeFormValues = (e) => {
  //   setFormValues({
  //     ...formValues,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const handleValueCategory = (e) => {
  //   setCategory(e.target.value);
  //   // console.log('elegido');
  // }
  // const handleValueCity = (e)=> {
  //   setCity(e.target.value);
  //   // console.log('elegido');
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setEnviarDatos(true);
  //   // console.log("ENVIADOS");
  // };
  //---------------------------------INIT Validaciones ----------------------
  // React.useEffect(() => {
  //   const isValid = ((name==false) && (category!==undefined) && (address==false) && (city!==undefined));
  //   setValidationAll(isValid);
  //   // console.log("total validaciones: ", isValid);
  // }, [name, address]);

  // const handleBlurName= () =>{
  //   const hasError = !((formValues.name).length > 1)
  //   setName(hasError)
  //   handleValidationAll();
  // }

  // const handleBlurCategory = ()=>{
  //   // const hasError = !(formValues.category)
  //   // setAddress(hasError)
  //   // console.log('elegido');
  // }

  // const handleBlurAddress=()=>{
  //   const hasError = !((formValues.name).length>1)
  //   setAddress(hasError)
  //   handleValidationAll();
  // }
  
  // // console.log(city);
  // const handleValidationAll = () => {
  //   // console.log(category);
  //   const isValid = ((name==false) && (category!==undefined) && (address==false) && (city!==undefined) )
  //   setValidationAll(isValid)
  // }
  

  return (
    <>
      <form className="datos">
        <label>
          Nombre de la propiedad
          <div>
            <input
              type="text"
              name='name'
              value={props.name}
              // onChange={handleChangeFormValues}
              onChange={(ev) => props.setName(ev.target.value)}
              // onBlur={handleBlurName}
              placeholder='Introduce aquí el nombre'
            />
          </div>
        </label>
        <label>
          Categoria
          <div>
            <select 
            name="category"
            value={props.category}
            // onChange={handleValueCategory}
            onChange={(ev) => props.setCategory(ev.target.value)}
            // onBlur={handleBlurCategory}
            >
            <option  disabled selected value="">Selecciona una Categoria</option>
            {apiCat?.categories?.map((cat)=> {
                    return <option  key={cat.id} value={cat.id}>{cat.title}</option>
                  })}
            </select>
          </div>
        </label>
        <label>
          Dirección
          <div>
            <input
              type="text"
              name='address'
              value={props.address}
              // onChange={handleChangeFormValues}
              onChange={(ev) => props.setAddress(ev.target.value)}
              // onBlur={handleBlurAddress}
              placeholder='Introduce aquí la dirección'
            />
          </div>
        </label>
        <label>
          Ciudad
          <div>
            <select 
            name="" 
            value={props.city}
            // onChange={handleValueCity}
            onChange={(ev) => props.setCity(ev.target.value)}
            required 
            >
            <option  defaultValue >Selecciona una Ciudad</option>
            {apiCity.cities.map((city)=> {
                    return <option  key={city.id} value={city.id}>{city.name}</option>
                  })}
            </select>
          </div>
        </label>
        {/* <button type="submit" disabled={!validationAll}>
          test
        </button> */}
      </form>
    </>
  );
};
