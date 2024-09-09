import React, { useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './authcontext'; // Assuming you have defined AuthContext for authentication

const PrivateRoute = ({ element, roleRequired, ...rest }) => {
  const { auth } = useContext(AuthContext);

  // Check if authenticated and role matches
  if (auth.isAuthenticated && auth.role === roleRequired) {
    return <Route {...rest} element={element} />;
  } else {
    // Redirect to login if not authenticated or role doesn't match
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
