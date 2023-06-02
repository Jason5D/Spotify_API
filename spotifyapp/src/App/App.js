import React, { useState } from "react";
import Playing from "../Playing/Playing.js";
import Playlist from "../Playlist/Playlist.js";
import SearchBar from "../SearchBar/SearchBar.js";
import Queue from "../Queue/Queue.js";

function App() {
  const [queueItems, setQueueItems] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  // Function to delete a playlist
  const handleDeletePlaylist = (index) => {
    const updatedPlaylists = [...playlists];
    updatedPlaylists.splice(index, 1); // Remove the playlist at the specified index
    setPlaylists(updatedPlaylists);
  };

  const handleAddToQueue = (item) => {
    setQueueItems([...queueItems, item]);
  };

  const handleRemoveFromQueue = (item) => {
    const updatedQueueItems = queueItems.filter(
      (queueItem) => queueItem !== item
    );
    setQueueItems(updatedQueueItems);
  };

  const handleClearQueue = () => {
    setQueueItems([]);
  };

  return (
    <div>
      <SearchBar onAddToQueue={handleAddToQueue} />
      <Queue
        queueItems={queueItems}
        onRemoveFromQueue={handleRemoveFromQueue}
        onClearQueue={handleClearQueue}
      />
      <Playlist onDeletePlaylist={handleDeletePlaylist} />
    </div>
  );
}

export default App;
