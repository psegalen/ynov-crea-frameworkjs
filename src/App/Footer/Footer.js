import React from "react";
import axios from "axios";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    // TODO : fetch Deezer data and store it in the state
    axios
      .get("https://api.deezer.com/artist/27")
      .then(response => this.setState({ data: response.data }));
  }

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
