import React, {useState} from "react";
import data from "../Data/data.json";

function Queue({ queueItems, onRemoveFromQueue, onClearQueue }) {
  const handleRemoveFromQueue = (item) => {
    onRemoveFromQueue(item);
  };

  const handleClearQueue = () => {
    onClearQueue();
  };

  return (
    <div>
      <h2>Queue</h2>
      <ol>
        {queueItems.map((item, index) => (
          <li key={index}>
            {item.track} by {item.artist}, {item.album}
            <button onClick={() => handleRemoveFromQueue(item)}>Remove</button>
          </li>
        ))}
      </ol>
      {queueItems.length > 0 && (
        <button onClick={handleClearQueue}>Clear All</button>
      )}
    </div>
  );
}



export default Queue;
