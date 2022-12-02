import React, { useState } from "react";
import { useCitiesApi } from '../../apis/citiesApi';
import { useCategoriesApi } from "../../apis/categoriesApi";

const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

const initValues = {
  name: "",
  category: "",
  address: "",
  city: "",
};

export const Datos = () => {
  //CONSUMIR API CIUDADES 
  const apiCity = useCitiesApi();
  //CONSUMIR API CATEGORIAS
  const apiCat = useCategoriesApi();

  const [formValues, setFormValues] = useState(initValues);
  const [name, setName] = useState(undefined);
  const [address, setAddress] = useState(undefined);
  const [validationAll, setValidationAll] = useState(false);

  const handleChangeFormValues = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviarDatos(true);
    console.log("ENVIADOS");
  };
  //---------------------------------INIT Validaciones ----------------------
  React.useEffect(() => {
    const isValid = ((name==false) && (address==false));
    setValidationAll(isValid);
    console.log("total validaciones: ", isValid);
  }, [name, address]);

  const handleBlurName= () =>{
    const hasError = !((formValues.name).length>1)
    setName(hasError)
    handleValidationAll();
  }

  const handleBlurAddress=()=>{
    const hasError = !((formValues.name).length>1)
    setAddress(hasError)
    handleValidationAll();
  }

  const handleValidationAll = () => {
    const isValid = ((name==false) && (address==false))
    setValidationAll(isValid)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="datos">
        <label>
          Nombre de la propiedad
          <div>
            <input
              type="text"
              name='name'
              value={formValues.name}
              onChange={handleChangeFormValues}
              onBlur={handleBlurName}
            />
          </div>
        </label>
        <label>
          Categoria
          <div>
            <select name="" id="" required>
            <option disabled selected>Selecciona una Categoria</option>
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
              value={formValues.address}
              onChange={handleChangeFormValues}
              onBlur={handleBlurAddress}
            />
          </div>
        </label>
        <label>
          Ciudad
          <div>
            <select name="" id="" required placeholder="Select a person...">
            <option disabled selected>Selecciona una Ciudad</option>
            {apiCity.cities.map((city)=> {
                    return <option  key={city.id} value={city.id}>{city.name}</option>
                  })}
            </select>
          </div>
        </label>
        <button type="submit" disabled={!validationAll}>
          test
        </button>
      </form>
    </>
  );
};
