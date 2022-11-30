import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import userContext from './userContext';

const ProtectedElement = (props) => {
    const { children } = props
    const { userLogged, userRol } = React.useContext(userContext); 
    return userLogged ? children : <Navigate to="/login" replace={true} />
}

export default ProtectedElement;