
import React, { useState } from 'react';
import ProfileList from '../components/ProfileList';
import Map from '../components/Map';
import { profilesData } from '../data/profiles';
import '../styles.css';

const HomePage = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSummaryClick = profile => {
    setSelectedProfile(profile.coordinates);
  };

  return (
    <div className="container">
      <div className="profiles-container">
        <ProfileList profiles={profilesData} onSummaryClick={handleSummaryClick} />
      </div>
      <div className="map-container">
        {selectedProfile && <Map coordinates={selectedProfile} />}
      </div>
    </div>
  );
};

export default HomePage;


