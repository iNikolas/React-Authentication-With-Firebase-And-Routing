import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { currentUser } = useAuth();
    return (
    <Route
      {...rest}
      element={<Component />}
    />
  );
};

export default PrivateRoute;
