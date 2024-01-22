import React, { useContext } from "react";
import { LoginStatusContext, LoginClickContext } from "./LoginContext";

export default function LoginButton() {
  const isLoggedIn = useContext(LoginStatusContext);
  const handleLoginClick = useContext(LoginClickContext);

  return (
    <button className="login-button" onClick={handleLoginClick}>
      {isLoggedIn ? "ログアウト" : "ログイン"}
    </button>
  );
}
