import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AthleteDetails = ({ athleteId }) => {
  const [athlete, setAthlete] = useState(null);

  useEffect(() => {
    const fetchAthlete = async () => {
      const res = await axios.get(`/api/get/${athleteId}`);
      setAthlete(res.data[0]);
    };
    fetchAthlete();
  }, [athleteId]);

  if (!athlete) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{athlete && athlete.name}</h1>
      <img src={athlete && athlete.photoUrl} alt={`${athlete && athlete.name} headshot`} />
      <p>Bio: {athlete && athlete.bio}</p>
      <p>Height: {athlete && athlete.height}cm</p>
      <p>Weight: {athlete && athlete.weight}kg</p>
      <p>Age: {athlete && athlete.age}</p>
      <p>Sport: {athlete && athlete.sport}</p>
    </div>
  );
};

export default AthleteDetails;