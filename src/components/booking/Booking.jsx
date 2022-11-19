import React from "react";
import { useState } from "react";

const Booking = (props) => {
    const [email, setEmail] = React.useState('');

    const handleValueEmail = (e) => {
        setEmail(e.target.value)
      }
  
      return(    
        <div className="container_form">
          <h2 className="title">Completa tus datos</h2>
          <form className="form" id="booking" onSubmit={handleSubmit}> 
            <label> Nombre <input type='text' /></label>
            <label> Apellido <input type='text' /></label>
            <label> Correo electrónico  <input type='email' value={email} onChange={handleValueEmail} onBlur={hadleBlurEmail}/> </label>
            <label> Ciudad <input type='text'/></label>
          </form>   
        </div>  

        )

    }
    
    
    export default Booking
