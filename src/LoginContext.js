import React, { createContext } from "react";

export const LoginStatusContext = createContext();
export const LoginClickContext = createContext();

export function LoginProviders({ children, isLoggedIn, setIsLoggedIn }) {
  const handleLoginClick = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <LoginStatusContext.Provider value={isLoggedIn}>
      <LoginClickContext.Provider value={handleLoginClick}>
        {children}
      </LoginClickContext.Provider>
    </LoginStatusContext.Provider>
  );
}
