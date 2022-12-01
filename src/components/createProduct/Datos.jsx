import React, { useState } from "react";

export const Datos = () => {
  const [name,setName] = useState("")
  const [address,setAddress] = useState("")

  const [nameErr,setNameErr] = useState({})
  const [addressErr, setAddressErr] = useState({})

  const handleSubmit=(e)=>{
    console.log(name, address);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="datos">
        <label>
          Nombre de la propiedad
          <div>
            <input 
              type="text"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
             />
             <label>El nombre no pueda </label>
          </div>
        </label>
        <label>
          Categoria
          <div>
            <select name="" id=""></select>
          </div>
        </label>
        <label>
          Dirección
          <div>
            <input
            type="text"
            value={address}
            onChange={(e)=>{setAddress(e.target.value)}}
             />
             
          </div>
        </label>
        <label>
          Ciudad
          <div>
            <select name="" id=""></select>
          </div>
        </label>
        <button type='submit'>test</button>
      </form>
    </>
  );
};
