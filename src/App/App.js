import React from "react";
import axios from "axios";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import List from "./List/List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    var idArtist = "27";
    var path = document.location.pathname.substr(1);
    if (path.length > 0 && !isNaN(path)) {
      idArtist = path;
    }
    this.loadArtist(idArtist);
  }

  loadArtist(idArtist) {
    if (document.location.pathname.substr(1) !== idArtist) {
      document.location.pathname = "/" + idArtist;
    }
    axios
      .get("https://api.deezer.com/artist/" + idArtist)
      .then(response => this.setState({ data: response.data }));
  }

  search(text) {
    axios.get("https://api.deezer.com/search?q=" + text).then(response => {
      var results = response.data.data;
      if (!results || results.length === 0) {
        alert("No result for search!");
      } else {
        this.loadArtist(results[0].artist.id);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.data} onSearch={this.search.bind(this)} />
        <List idArtist={this.state.data ? this.state.data.id : null} />
        <Footer data={this.state.data} />
      </div>
    );
  }
}

export default App;
