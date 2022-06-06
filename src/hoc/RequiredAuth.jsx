import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const RequiredAuth = ({ children }) => {


  const { isAuth } = useContext(AuthContext)


  if (isAuth) {
    return children
  } else {
    return <Navigate to="/login" />
  }
  // return children;
};

//export default RequiredAuth;