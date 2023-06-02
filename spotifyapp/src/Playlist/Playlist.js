import React from "react";
import data from "../Data/data.json";

function Playlist() {
  return (
    <div>
      <h2>Playlist</h2>
      <ol>
        {data.map((item) => (
        <li>{item.track}</li>
        ))}
      </ol>
    </div>
  );
}

export default Playlist;
