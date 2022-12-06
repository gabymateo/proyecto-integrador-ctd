import React from 'react'
import axios from 'axios'
import { useSearchParams } from "react-router-dom";

const baseUrl = 'http://3.142.76.191:8080'

// -----------------  ESTA ES LA API PARA CREAR USUARIOS ----------------------
export function useUserSingUpApi() {

    const [singUpUser, setSingUpUser] = React.useState([]);
    //const [searchParams, setSearchParams] = useSearchParams();

     // ---------- FUNCIÓN PARA CREAR PRODUCTOS EN LA DB ---------------   
    const postCreateUser = async (email, password, name, lastName) => {
    try{    
        const responsePostCreateUser = await axios.post(`${baseUrl}/singUp/`, {
            email: email,
            password: password,
            name: name,
            lastName: lastName
        })
        console.log("responsePostCreateUser: ", responsePostCreateUser);
        //setSingUpUser(responsePostCreateUser)
    }
    catch (error) {
        console.error('error', error.response.data)
    }
}

    // ---------- ESTE ES EL RETURN DE LA API ---------------------------
return {
    singUpUser: singUpUser,
    postCreateUser: postCreateUser,
    }
}