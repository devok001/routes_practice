import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    username: "",
    email: "",
  });
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Fetch user profile data (you can replace this with an actual API call)
  //   const storedToken = Cookies.get("authToken"); // Assuming you store token in cookies
  //   if (storedToken) {
  //     // Mock profile data for now
  //     setProfile({
  //       username: "johndoe@example.com",
  //       email: "johndoe@example.com",
  //     });
  //   } else {
  //     navigate("/login"); // Redirect to login page if no token found
  //   }
  // }, [navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Profile Page</h2>
        <div className="mt-6">
          <div className="mb-4">
            <strong className="text-sm font-medium text-gray-600">Username:</strong>
            <p className="text-gray-700">{profile.username}</p>
          </div>
          <div className="mb-4">
            <strong className="text-sm font-medium text-gray-600">Email:</strong>
            <p className="text-gray-700">{profile.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
