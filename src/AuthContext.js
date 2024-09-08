// src/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context for authentication
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false); // Default to not authenticated

  // Mock login function
  const login = () => setAuth(true);
  const logout = () => setAuth(false);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
