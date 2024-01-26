import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function LoginButton() {
  const { isLoggedIn, handleLoginClick } = useContext(AuthContext);

  return (
    <button className="login-button" onClick={handleLoginClick}>
      {isLoggedIn ? "ログアウト" : "ログイン"}
    </button>
  );
}
