import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <img src="assets/logo.jpg" className="Header-logo" alt="logo" />
      <span className="Header-title">Daft punk discography</span>
    </div>
  );
}

export default Header;
