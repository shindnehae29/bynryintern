import React from 'react';

const Profile = ({ profile }) => {
  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} />
      <div>
        <h3>{profile.name}</h3>
        <p>{profile.description}</p>
      </div>
    </div>
  );
};

export default Profile;
