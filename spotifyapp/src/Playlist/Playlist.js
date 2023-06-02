import React, { useState } from 'react';
import data from '../Data/data.json';

function Playlist() {
  const [playlistName, setPlaylistName] = useState('');
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
    if (playlistName.trim() !== '') {
      const newPlaylist = {
        name: playlistName,
        tracks: playlistTracks,
      };
      setPlaylists([...playlists, newPlaylist]);
      setPlaylistName('');
      setPlaylistTracks([]);
    }
  };

  const handleRemoveFromPlaylist = (playlistIndex, trackId) => {
    const updatedPlaylists = [...playlists];
    const updatedTracks = updatedPlaylists[playlistIndex].tracks.filter((track) => track.id !== trackId);
    updatedPlaylists[playlistIndex].tracks = updatedTracks;
    setPlaylists(updatedPlaylists);
  };

  const handleDeletePlaylist = (index) => {
    const updatedPlaylists = [...playlists];
    updatedPlaylists.splice(index, 1);
    setPlaylists(updatedPlaylists);
  };

  const handleEditPlaylist = (playlistIndex) => {
    // Perform editing logic here, such as removing tracks from the playlist
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
          {playlistTracks.map((track) => (
            <div key={track.id}>
              <p>
                Track: {track.track} | Artist: {track.artist} | Album: {track.album}
              </p>
              <button onClick={() => handleRemoveFromPlaylist(track.id)}>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No tracks added to the playlist.</p>
      )}
      <h3>Search Results</h3>
      {data.map((item) => (
        <div key={item.id}>
          <p>
            Track: {item.track} | Artist: {item.artist} | Album: {item.album}
          </p>
          <button onClick={() => handleAddToPlaylist(item)}>Add to Playlist</button>
        </div>
      ))}
      <button onClick={handleCreatePlaylist}>Create New Playlist</button>
      <h3>Playlists</h3>
      {playlists.map((playlist, index) => (
        <div key={index}>
          <h4>{playlist.name}</h4>
          {playlist.tracks.map((track) => (
            <div key={track.id}>
              <p>
                Track: {track.track} | Artist: {track.artist} | Album: {track.album}
              </p>
              <button onClick={() => handleRemoveFromPlaylist(index, track.id)}>Remove</button>
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





