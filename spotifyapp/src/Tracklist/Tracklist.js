import React from "react";
import data from "../Data/data.json";

function Tracklist() {
  return (
    <div>
      <h2>Tracklist</h2>
      {data.map((item) => (
        <p>Track: {item.track} | Artist: {item.artist} | Album: {item.album}</p>
      ))}
    </div>
  );
}

export default Tracklist;