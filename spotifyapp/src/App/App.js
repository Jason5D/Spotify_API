import React from "react";
import Track from "../Track/Track.js";
import Tracklist from "../Tracklist/Tracklist.js"
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist.js";

function App() {
  return (
    <div>
      <h1>My Spotify API App</h1>
      <SearchBar />
      <SearchResults />
      <Track />
      <Playlist />
      <Tracklist />
    </div>
  );
}

export default App;
