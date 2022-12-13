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
import { useFeaturesApi } from "../../apis/featuresApi";
import { FaWindowClose } from "react-icons/fa";
import {FaPlusSquare} from 'react-icons/fa';
import { useProductsApi} from "../../apis/productsApi";

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
  const [files, setFiles] = React.useState("");
  const [archivos, setArchivos] = useState("");

  const [validationAll, setValidationAll] = useState(false);
    /*---IMPORTANDO APIS A UTILIZAR--*/
  const {postProducts, products} = useProductsApi();
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
      files!=='';
      console.log("elegido");
      setValidationAll(error);
    }, [name, category, address, city, desc, descTitle, atributeName, atributeIcon, rules, security, cancelation, files]);
  };

  //armando el body para el post de productos
  const availability= true 
  const price = 200;
  const feacturesIds = [8, 10, 12, 13] //cocina, tv, aa y wifi
  const Authorization = localStorage.JWT

  function handleChange(event) {
    setArchivos(event.target.files)
  }

  function handleSubmit(event) {
    event.preventDefault()
    postProducts(name, city, category, desc, descTitle, availability, price, address, feacturesIds, archivos, Authorization);
    console.log("DATOS ENVIADOS");
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
        <form onSubmit={handleSubmit} className="admin-form_container" >
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
          onChange={validate()} 
          />
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
              value={files}
              onChange={handleChange}
            />
            </div>
          <FaPlusSquare/>
          </div>
        </div>
        <button type="submit" > Crear </button>
          <p></p>

        </form>
      </div>
    </>
  );
};

export default Form;
