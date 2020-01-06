import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <img
          src="assets/deezer_logo.jpg"
          className="Footer-Deezer-logo"
          alt="Deezer logo"
        />
        <span className="Footer-title">Deezer info :</span>
      </div>
    );
  }
}

export default Footer;
