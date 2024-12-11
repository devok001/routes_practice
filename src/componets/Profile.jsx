import React, { useContext } from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';
import ProfilePage from './ProfilePage';

export default function Profile() {
  const {isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If authenticated, render the nested profile page
  return <ProfilePage />; 
}
