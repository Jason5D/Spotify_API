import React from "react";
import { Container } from "react-bootstrap";
 // Define the Spotify authorization URL with required parameters
const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=847502a26de640479e5a54dfbf0b3468&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
 // Define a functional component called Login
function Login() {
  // Render a Bootstrap container with centered content and a button that links to the Spotify authorization URL
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login With Spotify
      </a>
    </Container>
  );
}
 // Export the Login component as the default export of this module
export default Login;
