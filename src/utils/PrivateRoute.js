import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

// Private Route that redirects to /login if the user is not authenticated
const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user ? children : <Navigate to="/login" />; // Redirect to login if not authenticated
};

// Private Route that redirects to /Dashbord if the user is authenticated (for login page)
const PrivateRouteLogin = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user ? <Navigate to="/Dashbord" /> : children; // Redirect to dashboard if authenticated
};

export default PrivateRoute;
export { PrivateRouteLogin };
