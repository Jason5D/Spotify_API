import React, { useState } from "react";

function Playlist({ onDeletePlaylist }) {
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const handleAddToPlaylist = (track) => {
    const newTrack = { ...track, id: playlistTracks.length + 1 };
    setPlaylistTracks([...playlistTracks, newTrack]);
  };

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const handleCreatePlaylist = () => {
    if (playlistName.trim() !== "") {
      const newPlaylist = {
        name: playlistName,
        tracks: playlistTracks,
      };
      setPlaylists([...playlists, newPlaylist]);
      setPlaylistName("");
      setPlaylistTracks([]);
    }
  };

  const handleRemoveFromPlaylist = (playlistIndex, trackIndex) => {
    // Remove the track from the playlist
    const updatedPlaylist = [...playlists];
    updatedPlaylist[playlistIndex].tracks.splice(trackIndex, 1);
    setPlaylists(updatedPlaylist);
  };

  const handleDeletePlaylist = (index) => {
    // Delete the playlist from the playlists array
    const updatedPlaylists = [...playlists];
    updatedPlaylists.splice(index, 1);
    setPlaylists(updatedPlaylists);
  };

  const handleEditPlaylist = (index) => {
    // Edit the playlist
    // ...
  };

  return (
    <div>
      <h2>Playlist</h2>
      <input
        type="text"
        placeholder="Playlist Name"
        value={playlistName}
        onChange={handlePlaylistNameChange}
      />
      {playlistTracks.length > 0 ? (
        <div>
          {playlistTracks.map((track, index) => (
            <div key={track.id}>
              <p>
                Track: {track.track} | Artist: {track.artist} | Album: {track.album}
              </p>
              <button onClick={() => handleRemoveFromPlaylist(0, index)}>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No tracks added to the playlist.</p>
      )}
      <button onClick={handleCreatePlaylist}>Create New Playlist</button>
      <h3>Playlists</h3>
      {playlists.map((playlist, index) => (
        <div key={index}>
          <h4>{playlist.name}</h4>
          {playlist.tracks.map((track, trackIndex) => (
            <div key={track.id}>
              <p>
                Track: {track.track} | Artist: {track.artist} | Album: {track.album}
              </p>
              <button onClick={() => handleRemoveFromPlaylist(index, trackIndex)}>Remove</button>
            </div>
          ))}
          <button onClick={() => handleDeletePlaylist(index)}>Delete Playlist</button>
          <button onClick={() => handleEditPlaylist(index)}>Edit Playlist</button>
        </div>
      ))}
    </div>
  );
}

export default Playlist;









