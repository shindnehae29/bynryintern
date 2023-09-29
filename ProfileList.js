import React from 'react';
import Profile from './Profile';

const ProfileList = ({ profiles }) => {
  return (
    <div className="profile-list">
      {profiles.map(profile => (
        <Profile key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;
