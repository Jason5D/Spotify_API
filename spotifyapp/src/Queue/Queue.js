import React, {useState} from "react";
import data from "../Data/data.json";

function Queue({ queueItems }) {
  return (
    <div>
      <h2>Queue</h2>
      <ol>
        {queueItems.map((item, index) => (
          <li key={index}>{item.track} by {item.artist}, {item.album}</li>
        ))}
      </ol>
    </div>
  );
}

export default Queue;
