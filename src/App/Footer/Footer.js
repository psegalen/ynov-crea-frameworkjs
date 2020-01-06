import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="Footer">
      <img
        src="assets/deezer_logo.jpg"
        className="Footer-Deezer-logo"
        alt="Deezer logo"
      />
      <div className="Footer-text">
        <span>Deezer info : </span>
        {props.data ? (
          <span>
            {props.data.nb_album} Albums / {props.data.nb_fan} Fans
          </span>
        ) : (
          undefined
        )}
      </div>
    </div>
  );
}

export default Footer;
