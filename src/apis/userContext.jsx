import React from 'react';
import axios from 'axios'

const baseUrl = 'http://34.201.99.165:8080/grupo5'

const userContext = React.createContext();

export const CustomProvider = (props) => {

const [userLogged, setUserLogged] = React.useState("") 
const [userLastName, setUserLastName] = React.useState("")
const [userEmail, setUserEmail] = React.useState([]);

const login = React.useCallback( async (email, password)=> {
    try {
        const responsePostLogin = await axios.post(`${baseUrl}/login/`, {
            email:email,
            password:password,
        })

        const responseGetUser = await axios.get(`${baseUrl}/auth/users/`, {
            headers: {
                Authorization: responsePostLogin.headers.authorization,
            },
        })
        console.log(responseGetUser.data.data);
        setUserLogged(responseGetUser.data.data.name)
        setUserLastName(responseGetUser.data.data.lastName)
        setUserEmail(responseGetUser.data.data.email)
        localStorage.JWT =  responsePostLogin.headers.authorization; //almacenar el token en el local storage, en una variable llamada JWT
        return true;
    }
    catch (error) {
        console.log('error por personalizar: ', error.response.data)
        return false;
    }
}, [])


    return (
        <userContext.Provider value={{
            userLogged:userLogged,
            setUserLogged:setUserLogged,
            userLastName:userLastName,
            userEmail: userEmail,
            login:login
        }}>
            {props.children}
        </userContext.Provider>
    )
}

export default userContext;