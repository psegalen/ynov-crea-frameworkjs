import React, { useState } from "react";
import "./Header.css";

function Header(props) {
  var [text, setText] = useState("");
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
      <div>
        Search{" "}
        <input
          type="text"
          value={text}
          onChange={evt => setText(evt.target.value)}
        />{" "}
        <button onClick={() => props.onSearch(text)}>Go!</button>
      </div>
    </div>
  );
}

export default Header;
