import { React, useState, useCallback, useEffect } from "react";
import "./form.css";
import { NavLink } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
/*---COMPONENTES---*/
import { Datos } from "./Datos";
import { Descripcion } from "./Descripcion";
import { Atributos } from "./Atributos";
import { Politicas } from "./Politicas";
import { Imagenes } from "./Imagenes";
export const Form = () => {
  /*---ESTADOS---*/
  /*---COMPONENTE DATOS---*/
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  /*---COMPONENTE DESCRIPCION---*/
  const [desc, setDesc] = useState("");
  /*---COMPONENTE ATRIBUTOS---*/
  const [atributeName, setAtributeName] = useState("");
  const [atributeIcon, setAtributeIcon] = useState("");
  /*---COMPONENTE POLITICAS---*/
  const [rules, setRules] = useState("");
  const [security, setSecurity] = useState("")
  const [cancelation, setCancelation] = useState("")
  /*---COMPONENTE IMAGENES---*/
  const [img, setImg] = useState("")
  const [validationAll, setValidationAll] = useState(false);

  const validate = () => {
    useEffect(() => {
      const error =
      name !== "" && category !== "" && address !== "" && city !== "" &&
      desc !== "" && 
      atributeName !== "" && atributeIcon !== "" &&
      rules !=='' && security !=='' && cancelation !=='' &&
      img!=='';
      console.log("elegido");
      setValidationAll(error);
    }, [name, category, address, city, desc, atributeName, atributeIcon, rules, security, cancelation, img]);
  };
  console.log(img);
  console.log("La validacion es: " + validationAll);

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
          onSubmit={(ev) => {
            ev.preventDefault();
          }}
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
          <Imagenes img={img} setImg={setImg} onChange={validate()} />
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
