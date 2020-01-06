import React from "react";

function ListItem(props) {
  return (
    <div className="ListItem">
      <img
        src={props.track.album.cover_medium}
        alt="cover"
        className="ListItem-cover"
      />
      <span className="ListItem-title">{props.track.title}</span>
      <audio src={props.track.preview} controls />
    </div>
  );
}

export default ListItem;
