// Save the 10 songs in a playlist

Code
JS
JavaScript
// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQDQMpn5VV6mR3UxPR-4rXWooqX5CYsCfHYabBpicszIF1OwRXy4GRte3B6peCA8XNLQkqVipmEr21ufQSxJkykerEYFyFVq1pWr7I6SUD-6xQaE_lSnkfjQ0kjECUYYxkUyB5ZnnduwVN6affIukVTVrhsFT2KfQZS-cibmzfoIKVh0K7102U1yqpzB_wSelwA2OaF4QDp0kfil_8JcTIlmy8OAXraPFlzucLJw1YRICK_9sCRPgvl5HxA3R8WTuPR_';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

const tracksUri = [
  'spotify:track:2rIzolYxlQr9JoitK2BeC4','spotify:track:6pvtekxiJ319VRXCxZdEgN','spotify:track:0WW55mKV8MrlWvQlWtLKbg','spotify:track:1nf7bH7mrfTrizoQ3J84wY','spotify:track:6532OzRcz7XkEzZiznrLD2','spotify:track:1rnNiJNHXtO0NsdZmZYU2O','spotify:track:5rtGhin74wxFojrPqgTpdY','spotify:track:16oq01RA9Yq1iDjo9zC3Sk','spotify:track:5BhAwQkkAGdl8CNIW6ZzSf','spotify:track:1qFtVSxHfGGElD7pLM1D3a'
];

async function createPlaylist(tracksUri){
  const { id: user_id } = await fetchWebApi('v1/me', 'GET')
  
  const playlist = await fetchWebApi(
    `v1/users/${user_id}/playlists`, 'POST', {
      "name": "My recommendation playlist",
      "description": "Playlist created by the tutorial on developer.spotify.com",
      "public": false
  })
  
  await fetchWebApi(
    `v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(',')}`,
    'POST'
  );

  return playlist;
}

const createdPlaylist = await createPlaylist(tracksUri);
console.log(createdPlaylist.name, createdPlaylist.id);