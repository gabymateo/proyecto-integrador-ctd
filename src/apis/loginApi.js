import React from 'react'
import axios from 'axios'

const baseUrl = 'http://34.201.99.165:8080/grupo5'

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
        console.log("responsePostLogin: ", responsePostLogin); //acá mirar como llega la respuesta para saber que campos debo tomar para las asignaciones de los 3 pasos siguientes
        setToken(responsePostLogin)  //asignar el JWT devuelto al estado token
        localStorage.JWT = responsePostLogin; //almacenar el token en el local storage, en una variable llamada JWT
        localStorage.userId = responsePostLogin; //almacenar el userId en el local storage, en una variable llamada userId        
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