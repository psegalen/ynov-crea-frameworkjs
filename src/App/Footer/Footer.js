import React from "react";
import axios from "axios";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    axios
      .get("https://api.deezer.com/artist/" + this.props.idArtist)
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
        <div className="Footer-text">
          <span>Deezer info : </span>
          {this.state.data ? (
            <span>
              {this.state.data.name} / {this.state.data.nb_album} albums /{" "}
              {this.state.data.nb_fan} Fans
            </span>
          ) : (
            undefined
          )}
        </div>
      </div>
    );
  }
}

export default Footer;
