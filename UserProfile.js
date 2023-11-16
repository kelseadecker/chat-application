// UserProfile.js
import React from 'react';

const UserProfile = ({ username }) => {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p>Username: {username}</p>
      {/* Add more profile information as needed */}
    </div>
  );
};

export default UserProfile;
