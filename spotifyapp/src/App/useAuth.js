import React, { useState, useEffect } from "react";
import axios from "axios";
 // Define a custom hook called useAuth that takes a "code" parameter
function useAuth(code) {
  // Define state variables for the access token, refresh token, and token expiration time
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();
  // Send a POST request to the server with the authorization code to get access and refresh tokens
  useEffect(() => {
    axios.post("http://localhost:3001/login", {
        code,
        }).then(res => {
            // Update the state variables with the access and refresh tokens and token expiration time
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn);
            // Remove the authorization code from the URL
            window.history.pushState({}, null, "/");
        }).catch(() => {
            // Redirect to the login page if there is an error
            window.location = "/";
        })
    }, [code]);
  // Send a POST request to the server to refresh the access token before it expires
    useEffect(() => {
    }, [refreshToken, expiresIn]);
  useEffect(() => {
        // If there is no refresh token or expiration time, do nothing
        if (!refreshToken || !expiresIn) return
        // Set a timeout to send a POST request to the server to refresh the access token
        const timeout = setTimeout(() => {
        axios.post("http://localhost:3001/refresh", {
            refreshToken,
            }).then(res => {
                // Update the state variable with the new access token and expiration time
                setAccessToken(res.data.accessToken);
                setExpiresIn(res.data.expiresIn);
            }).catch(() => {
                // Redirect to the login page if there is an error
                window.location = "/";
            })
        }, (expiresIn - 60) * 1000)
        // Clear the timeout when the component unmounts or when refreshToken and expiresIn change
        return () => clearTimeout(timeout )
        }, [refreshToken, expiresIn]);
  // Return the access token from the hook
    return accessToken;
}
 // Export the useAuth hook as the default export of this module
export default useAuth;