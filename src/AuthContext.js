import React, { createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children, isLoggedIn, setIsLoggedIn }) {
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
