import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AthleteList() {
  const [athletes, setAthletes] = useState([]);

  useEffect(() => {
    axios.get('/api/get')
      .then(response => {
        setAthletes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Athletes</h2>
      <ul>
        {athletes && athletes.map((athlete) => (
          <li key={athlete && athlete.id}>
            <h3>{athlete && athlete.name}</h3>
            <p>Sport: {athlete && athlete.sport}</p>
            <p>Age: {athlete && athlete.age}</p>
            <p>Height: {athlete && athlete.height}</p>
            <p>Weight: {athlete && athlete.weight}</p>
            <p>Bio: {athlete && athlete.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AthleteList;