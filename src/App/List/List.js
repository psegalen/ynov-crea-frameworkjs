import React from "react";
import axios from "axios";
import "./List.css";
import ListItem from "./ListItem";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.idArtist && this.props.idArtist !== prevProps.idArtist) {
      axios
        .get(
          "https://api.deezer.com/artist/" +
            this.props.idArtist +
            "/top?limit=50"
        )
        .then(response => this.setState({ tracks: response.data.data }));
    }
  }

  render() {
    console.log(this.state.tracks);
    return (
      <div className="List">
        {this.state.tracks
          ? this.state.tracks.map(track => <ListItem track={track} />)
          : undefined}
      </div>
    );
  }
}

export default List;
