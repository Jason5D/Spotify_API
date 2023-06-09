// Recommend 5 songs based on yyour top 5 tracks

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

const topTracksIds = [
  '2rIzolYxlQr9JoitK2BeC4','0WW55mKV8MrlWvQlWtLKbg','6532OzRcz7XkEzZiznrLD2','5rtGhin74wxFojrPqgTpdY','5BhAwQkkAGdl8CNIW6ZzSf'
];

async function getRecommendations(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-recommendations
  return (await fetchWebApi(
    `v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(',')}`, 'GET'
  )).tracks;
}

const recommendedTracks = await getRecommendations();
console.log(
  recommendedTracks.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);