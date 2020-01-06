import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="Header">
      <img
        src={props.data ? props.data.picture_medium : "assets/logo.jpg"}
        className="Header-logo"
        alt="logo"
      />
      <span className="Header-title">
        {props.data ? props.data.name : ""} discography
      </span>
    </div>
  );
}

export default Header;
