import React, { useRef,useContext } from "react";
import { useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { AuthContext } from "../provider/AuthProvider";


export default function AuthForm() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const usernameInput = useRef();
  const passInput = useRef();
  const navigate = useNavigate();
  const authUrl = "http://localhost:8080/login/user";
  const {setIsAuthenticated, setToken } = useContext(AuthContext);

  async function handleAuthRequest() {
    try {
    const user = JSON.stringify({username,password});
      console.log("username", user);
      const response = await fetch(authUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Correct header
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      const result = await response.json();

      setToken(result.token);
      setIsAuthenticated(true);

      console.log("Response", result.token);
      alert("token", result.token);
      navigate('/'); // Redirect on success
    } catch (error) {
      console.error("Error:", error);
      alert("Login failed: " + error.message);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorMessage = "";
    let isValid = true;

    const usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!usernameRegex.test(username)) {
      isValid = false;
      usernameInput.current.setCustomValidity("Enter a valid username address.");
      errorMessage += "username is invalid.\n"; // Add to error message
    } else {
      usernameInput.current.setCustomValidity(""); // Clear custom validity if valid
    }

    // const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // if (!passRegex.test(password)) {
    //   isValid = false;
    //   passInput.current.setCustomValidity("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
    //   errorMessage += "Password is invalid.\n"; // Add to error message
    // } else {
    //   passInput.current.setCustomValidity(""); // Clear custom validity if valid
    // }

    if (!password.length >= 8) {
      isValid = false;
      passInput.current.setCustomValidity("Password must conatin 8 letters.");
    }

    if (!isValid) {
      alert(errorMessage); // Display error message
    } else {
      handleAuthRequest();
      console.log("Form submitted successfully.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              username
            </label>
            <input
              ref={usernameInput}
              type="username"
              id="username"
              name="username"
              required
              value={username}
              onChange={(e) => setusername(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              ref={passInput}
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log In
          </button>

          <div className="text-center mt-4">
            <p>
              Already have an account
              <Link to="/signup" className="text-blue-600 hover:underline">
                Signup here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
