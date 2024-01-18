import { createContext, useState } from "react";

export const LoginContext = createContext();

export function useLoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return { isLoggedIn, handleLoginClick };
}
