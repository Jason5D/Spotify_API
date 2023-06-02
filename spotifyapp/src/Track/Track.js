import React from "react";
import data from "../Data/data.json";

function Track() {
  const firstTrack = data[0].track;
  const firstArtist = data[0].artist;
  return (
    <div>
      <h2>Track</h2>
        <p>{firstTrack} by {firstArtist}</p>
    </div>
  );
}

export default Track;

