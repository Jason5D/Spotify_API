import React from "react";
import data from "../Data/data.json";

function Playing() {
  const firstTrack = data[0].track;
  const firstArtist = data[0].artist;
  const firstAlbum = data[0].album;
  return (
    <div>
      <h2>Playing</h2>
        <p>{firstTrack} by {firstArtist}, {firstAlbum}</p>
    </div>
  );
}

export default Playing;

