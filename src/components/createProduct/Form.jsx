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
import { useProductsApi } from "../../apis/productsApi";

export const Form = () => {
  const [desc, setDesc] = useState("");
  const [atributeName, setAtributeName] = useState("");
  const [atributeIcon, setAtributeIcon] = useState("");
  const [policies, setPolicies] = useState("");
  const [img, setImg] = useState("")
  const [validationAll, setValidationAll] = useState(false);
  const {postProducts} = useProductsApi()


  const validate = () => {
    useEffect(() => {
      const error = desc !== "" && atributeName !== "" && atributeIcon !== "" && policies !=='' && img!=='';
      console.log("elegido");
      setValidationAll(error);
    }, [desc, atributeName, atributeIcon, policies, img]);
  };

  //armando el body para el post de productos
  const name= 
//(name, cityId, categoryId, description, descriptionTitle, availability, price, address, features, files, Authorization)
  const submitForm = (ev) => {
    ev.preventDefault();
    postProducts()

  }


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
          onSubmit={submitForm}
          className="admin-form_container"
        >
          <Datos />
          <Descripcion desc={desc} setDesc={setDesc} onChange={validate()} />
          <Atributos
            atributeName={atributeName}
            setAtributeName={setAtributeName}
            atributeIcon={atributeIcon}
            setAtributeIcon={setAtributeIcon}
            onChange={validate()}
          />
          <Politicas
            policies={policies}
            setPolicies={setPolicies}
            onChange={validate()}
          />
          <Imagenes
          img={img}
          setImg={setImg}
          onChange={validate()}
          />
          <button type="submit"
          disabled={!validationAll}>
            Crear
          </button>
          <p></p>
        </form>
      </div>
    </>
  );
};

export default Form;
