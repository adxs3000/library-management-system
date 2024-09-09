import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    role: '',
  });

  const handleLogin = (role) => {
    setAuth({
      isAuthenticated: true,
      role: role,
    });
  };

  const handleLogout = () => {
    setAuth({
      isAuthenticated: false,
      role: '',
    });
  };

  return (
    <AuthContext.Provider value={{ auth, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
