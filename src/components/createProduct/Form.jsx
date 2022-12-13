import React from 'react'
import { useState, useCallback, useEffect } from "react";
import "./form.css";
import { NavLink } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
/*---COMPONENTES---*/
import { Datos } from "./Datos";
import { Descripcion } from "./Descripcion";
import { Atributos } from "./Atributos";
import { Politicas } from "./Politicas";
import { Imagenes } from "./Imagenes";
import { useProductsApi } from "../../apis/productsApi";
import { useFeaturesApi } from "../../apis/featuresApi";
import { FaWindowClose } from "react-icons/fa";
import {FaPlusSquare} from 'react-icons/fa';

export const Form = () => {
  /*---ESTADOS---*/
  /*---COMPONENTE DATOS---*/
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  /*---COMPONENTE DESCRIPCION---*/
  const [desc, setDesc] = useState("");
  const [descTitle, setDescTitle] = useState("")
  /*---COMPONENTE ATRIBUTOS---*/
  const [atributeName, setAtributeName] = useState("");
  const [atributeIcon, setAtributeIcon] = useState("");
  /*---COMPONENTE POLITICAS---*/
  const [rules, setRules] = useState("");
  const [security, setSecurity] = useState("")
  const [cancelation, setCancelation] = useState("")
  /*---COMPONENTE IMAGENES---*/
  const [fotos, setFotos] = useState("");
  const [imagenes, setImagenes] = useState("");

  const [validationAll, setValidationAll] = useState(false);
    /*---IMPORTANDO APIS A UTILIZAR--*/
  const {postProducts} = useProductsApi();
  const {features, getFeatures} = useFeaturesApi();

  //Este use effect es para que en el mount del componente se puedan obtener las features y usarlas luego en los selects
  React.useEffect(() => {
    getFeatures()
}, [])
// ----------------------- fin del useEffect-----------------------------------------------------------------------------

  const validate = () => {
    useEffect(() => {
      const error =
      name !== "" && category !== "" && address !== "" && city !== "" &&
      desc !== "" && descTitle !== "" &&
      atributeName !== "" && atributeIcon !== "" &&
      rules !=='' && security !=='' && cancelation !=='' &&
      fotos!=='';
      console.log("elegido");
      setValidationAll(error);
    }, [name, category, address, city, desc, descTitle, atributeName, atributeIcon, rules, security, cancelation, fotos]);
  };

  //armando el body para el post de productos
  const availability= true 
  const price = 200;
  const feacturesIds = [8, 10, 12, 13] //cocina, tv, aa y wifi
  const Authorization = localStorage.JWT

//(name, cityId, categoryId, description, descriptionTitle, availability, price, address, features, files, Authorization)
console.log(category);
  const submitForm = (ev) => {
    ev.preventDefault();
    //postProducts(name, city, category, desc, descTitle, availability, price, address, feacturesIds, xxxxx, Authorization )

  }

  function handleChange(event) {
    setImagenes(event.target.files)
  }
  console.log(setImagenes);

  function handleSubmit(event) {
    event.preventDefault()
    //postProducts(name, city, category, desc, descriptionTitle, availability, price, address,  )

  };

  return (
    <>
      <div className="header-admin">
        <h1>Administración</h1>
        <NavLink to="/">
          <IoChevronBack className="backButton" />
        </NavLink>
      </div>
      <div className="admin-form">
        <h1>Crear Propiedad</h1>
        <form
          onSubmit={submitForm}
          className="admin-form_container"
        >
          <Datos
            name={name}
            setName={setName}
            category={category}
            setCategory={setCategory}
            address={address}
            setAddress={setAddress}
            city={city}
            setCity={setCity}
            onChange={validate()}
          />
          <Descripcion 
          desc={desc} 
          setDesc={setDesc}
          descTitle={descTitle}
          setDescTitle={setDescTitle} 
          onChange={validate()} />
          <Atributos
            atributeName={atributeName}
            setAtributeName={setAtributeName}
            atributeIcon={atributeIcon}
            setAtributeIcon={setAtributeIcon}
            onChange={validate()}
          />
          <Politicas
            rules={rules}
            setRules={setRules}
            security={security}
            setSecurity={setSecurity}
            cancelation={cancelation}
            setCancelation={setCancelation}
            onChange={validate()}
          />
        <div className="imagenes">
          <h1>Cargar imágenes</h1>
          <div className="imagenes__contenedor">
            <div>
              <input
              type="file"
              accept="image/*"
              multiple
              value={fotos}
              onChange={handleChange}
            />
          </div>
          {/* <FaWindowClose /> */}
          <FaPlusSquare/>
        </div>
      </div>
          <button type="submit" disabled={!validationAll}>
            Crear
          </button>
          <p></p>
        </form>
      </div>
    </>
  );
};

export default Form;
