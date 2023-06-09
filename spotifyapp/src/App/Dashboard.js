import React from "react";
import useAuth from "./useAuth.js";
 // Define a functional component called Dashboard that takes a "code" prop
function Dashboard({ code }) {
    // Call the useAuth hook with the "code" prop to get the access token
    const accessToken = useAuth(code)
  // Render a div element containing the "code" prop
  return <div>{code}</div>;
}
 // Export the Dashboard component as the default export of this module
export default Dashboard;
