import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-header">
        <p>Hello Ynov !</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <Footer idArtist="100" />
    </div>
  );
}

export default App;
