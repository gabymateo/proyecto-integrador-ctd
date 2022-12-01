import React from 'react'
import axios from 'axios'

const baseUrl = 'http://18.220.195.162:8080/grupo5'

// -----------------  ESTA ES LA API DE LOGIN---------------------
export function useLoginApi() {
    const [token, setToken] = React.useState([]);
    const [userId, setUserId] = React.useState('');

    const postLogin = async (email, password) => {
    try{    
        const responsePostLogin = await axios.post(`${baseUrl}/login/`, {
            email:email,
            password:password,
        })
        console.log("responsePostLogin: ", responsePostLogin.headers); //acá mirar como llega la respuesta para saber que campos debo tomar para las asignaciones de los 3 pasos siguientes
        setToken( responsePostLogin.headers.authorization)  //asignar el JWT devuelto al estado token
        localStorage.JWT =  responsePostLogin.headers.authorization; //almacenar el token en el local storage, en una variable llamada JWT
        localStorage.userId = 1; //almacenar el userId en el local storage, en una variable llamada userId        
    }
    catch (error) {
        console.log('error', error.response.data)
    }
}

return {
    token: token,
    postLogin: postLogin,
    }

}