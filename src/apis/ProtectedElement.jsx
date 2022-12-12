import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import userContext from './userContext';

export const ProtectedElement = (props) => {
    const { children } = props
    const { userLogged, userRol } = React.useContext(userContext); 
    console.log("protectedelement: ",userLogged, userRol);
    return userLogged ? children : <Navigate to="/login" replace={true} />
}

export const ProtectedAdmin = (props) => {
    const { children } = props
    const { userLogged, userRol } = React.useContext(userContext); 
    console.log("protectedAdmin", userLogged, userRol);
    return userRol==1 ? children : <Navigate to="/login" replace={true} />
}

