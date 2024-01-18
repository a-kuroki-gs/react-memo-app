import React from "react";

export default function LoginButton({ isLoggedIn, handleLoginClick }) {
  return (
    <button className="login-button" onClick={handleLoginClick}>
      {isLoggedIn ? "ログアウト" : "ログイン"}
    </button>
  );
}
