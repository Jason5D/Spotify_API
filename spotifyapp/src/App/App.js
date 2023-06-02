import React, {useState} from "react";
import Playing from "../Playing/Playing.js";
import Tracklist from "../Tracklist/Tracklist.js"
import SearchBar from "../SearchBar/SearchBar.js";
import Queue from "../Queue/Queue.js";

function App() {
  const [queueItems, setQueueItems] = useState([]);

  const handleAddToQueue = item => {
    setQueueItems([...queueItems, item]);
  };

  return (
    <div>
      <SearchBar onAddToQueue={handleAddToQueue} />
      <Queue queueItems={queueItems} />
    </div>
  );
}

export default App;
