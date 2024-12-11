import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm() {
  const nameinput = useRef();
  const emailinput = useRef();
  const passinput = useRef();
  const cpassinput = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setErrorMessage] = useState(""); // To store the error message

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorMessage = "";
    let isValid = true; // Start with true

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(username)) {
      isValid = false;
      nameinput.current.setCustomValidity("Enter a valid name.");
      errorMessage += "Username is invalid.\n"; // Add to error message
    } else {
      nameinput.current.setCustomValidity(""); // Clear custom validity if valid
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      emailinput.current.setCustomValidity("Please enter a valid email address.");
      errorMessage += "Email is invalid.\n"; // Add to error message
    } else {
      emailinput.current.setCustomValidity(""); // Clear custom validity if valid
    }

    if (password.length < 8) {
      isValid = false;
      passinput.current.setCustomValidity("Password must be at least 8 characters long.");
      errorMessage += "Password must be at least 8 characters long.\n"; // Add to error message
    } else {
      passinput.current.setCustomValidity(""); // Clear custom validity if valid
    }

    if (confirmPassword.length < 8) {
      isValid = false;
      cpassinput.current.setCustomValidity("Confirm password must be at least 8 characters long.");
      errorMessage += "Confirm password must be at least 8 characters long.\n"; // Add to error message
    } else {
      cpassinput.current.setCustomValidity(""); // Clear custom validity if valid
    }

    if (password !== confirmPassword) {
      isValid = false;
      passinput.current.setCustomValidity("Passwords do not match.");
      errorMessage += "Passwords do not match.\n"; // Add to error message
    } else {
      passinput.current.setCustomValidity(""); // Clear custom validity if valid
    }

    if (isValid) {
      // If everything is valid, clear error and log the details
      setErrorMessage(""); // Clear error message if valid
      console.log("Form submitted successfully!");
      console.log("username: " + username);
      console.log("email: " + email);
      console.log("password: " + password);
      console.log("confirm password: " + confirmPassword);
    } else {
      setErrorMessage(errorMessage); // Set the error message if not valid
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              ref={nameinput}
              type="text"
              id="username"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              ref={emailinput}
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              ref={passinput}
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              ref={cpassinput}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>

          {/* Display error message */}
          {error && <div className="mt-4 text-red-600 text-sm">{error}</div>}

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Log in here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
