import React, { useState, createContext, useContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState();

  const handleLoginClick = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  const context = {
    isLoggedIn,
    handleLoginClick,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
