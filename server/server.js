// Import required modules
const express = require("express");
const spotifyWebApi = require("spotify-web-api-node");
const cors = require("cors");
const bodyParser = require("body-parser");
 // Create an instance of the Express application
const app = express();
 // Enable Cross-Origin Resource Sharing (CORS) for the app
app.use(cors());
 // Parse incoming requests with JSON payloads
app.use(bodyParser.json());
 // Handle POST requests to the "/refresh" endpoint
app.post("/refresh", (req, res) => {
  // Get the refresh token from the request body
  const refreshToken = req.body.refreshToken;
   // Create a new instance of the SpotifyWebApi client with the refresh token
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "847502a26de640479e5a54dfbf0b3468",
    clientSecret: "ab3dbde9d042470d9cdecac6ba441813",
    refreshToken,
  });
   // Use the SpotifyWebApi client to refresh the access token
  spotifyApi
    .refreshAccessToken()
    .then(data => {
      // Send the new access token and expiration time in the response
      res.json({
        access_token: data.body.access_token,
        expires_in: data.body.expires_in,
      });
    })
    .catch(err => {
      // Log any errors and send a 400 Bad Request status code in the response
      console.log(err);
      res.sendStatus(400);
    });
});
 // Handle POST requests to the "/login" endpoint
app.post("/login", (req, res) => {
  // Get the authorization code from the request body
  const code = req.body.code;
   // Create a new instance of the SpotifyWebApi client
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "847502a26de640479e5a54dfbf0b3468",
    clientSecret: "ab3dbde9d042470d9cdecac6ba441813",
  });
   // Use the SpotifyWebApi client to exchange the authorization code for an access token and refresh token
  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      // Send the access token, refresh token, and expiration time in the response
      res.json({
        access_token: data.body.access_token,
        refresh_token: data.body.refresh_token,
        expires_in: data.body.expires_in,
      });
    })
    .catch(err => {
      // Log any errors and send a 400 Bad Request status code in the response
      console.log(err);
      res.sendStatus(400);
    });
});
 // Start the app listening for incoming requests on port 3001
app.listen(3001);