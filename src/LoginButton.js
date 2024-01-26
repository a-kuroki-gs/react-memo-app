import React from "react";
import { useAuth } from "./AuthContext";

export default function LoginButton() {
  const { isLoggedIn, handleLoginClick } = useAuth();

  return (
    <button className="login-button" onClick={handleLoginClick}>
      {isLoggedIn ? "ログアウト" : "ログイン"}
    </button>
  );
}
