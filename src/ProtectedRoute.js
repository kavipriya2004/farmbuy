// src/ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { auth } = useAuth();

  return (
    <Route
      {...rest}
      element={auth ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
