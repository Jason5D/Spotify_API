import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login.js";
import Dashboard from "./Dashboard.js";
 // Get the authorization code from the URL query string
const code = new URLSearchParams(window.location.search).get("code");
 // Define a functional component called App
function App() {
  // Render the Dashboard component with the "code" prop if the "code" variable is truthy (i.e. not null or undefined)
  // Otherwise, render the Login component
  return  code ? <Dashboard code={code} /> : <Login />
}
 // Export the App component as the default export of this module
export default App;

