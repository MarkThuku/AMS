import React, { useState, useEffect } from "react";
import axios from "axios";

const AddAthlete = () => {
  const [athletes, setAthletes] = useState([]);
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [bio, setBio] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [sport, setSport] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingAthlete, setEditingAthlete] = useState(null);

  useEffect(() => {
    getAthletes();
  }, []);

  const getAthletes = async () => {
    const response = await axios.get("http://localhost:3030/api/athletes");
    setAthletes(response.data);
  };

  const addAthlete = async (e) => {
    e.preventDefault();
    const athleteNumber = getUniqueAthleteNumber();
    await axios.post("http://localhost:3030/api/athletes", {
      athleteNumber,
      name,
      photoUrl,
      bio,
      height,
      weight,
      age,
      sport,
    });
    getAthletes();
    setName("");
    setPhotoUrl("");
    setBio("");
    setHeight("");
    setWeight("");
    setAge("");
    setSport("");
  };

  const deleteAthlete = async (athleteNumber) => {
    await axios.delete(
      `http://localhost:3030/api/athletes/${athleteNumber}`
    );
    getAthletes();
  };

  const editAthlete = (athlete) => {
    setIsEditing(true);
    setEditingAthlete(athlete);
    setName(athlete.name);
    setPhotoUrl(athlete.photoUrl);
    setBio(athlete.bio);
    setHeight(athlete.height);
    setWeight(athlete.weight);
    setAge(athlete.age);
    setSport(athlete.sport);
  };

  const updateAthlete = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3030/api/athletes/${editingAthlete.athleteNumber}`, {
      name,
      photoUrl,
      bio,
      height,
      weight,
      age,
      sport,
    });
    setIsEditing(false);
    setEditingAthlete(null);
    getAthletes();
    setName("");
    setPhotoUrl("");
    setBio("");
    setHeight("");
    setWeight("");
    setAge("");
    setSport("");
  };

  const getUniqueAthleteNumber = () => {
    if (athletes.length > 0) {
      const maxNumber = Math.max(...athletes.map(athlete => athlete.athleteNumber));
      return maxNumber + 1;
    } else {
      return 1;
    }
  }

  return (
    <div>
    <form onSubmit={isEditing ? updateAthlete : addAthlete}>
    
      <h2>Add/Edit Athlete</h2>
   
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    
      <div>
        <label htmlFor="photoUrl">Photo URL:</label>
        <input
          type="text"
          id="photoUrl"
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
        />
      </div>
     
      <div>
        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
      </div>
     
      <div>
        <label htmlFor="height">Height:</label>
        <input
          type="text"
          id="height"
          value={height}
          onChange={(event) => setHeight(event.target.value)}/>
          </div>

<div>
<label htmlFor="weight">Weight:</label>
<input type="text" id="weight" name="weight" value={weight} onChange={(event) => setWeight(event.target.value)} />
</div>

<div>
<label htmlFor="age">Age:</label>
<input type="text" id="age" name="age" value={age} onChange={(event) => setAge(event.target.value)} />
</div>

<div>
<label htmlFor="sport">Sport:</label>
<input type="text" id="sport" name="sport" value={sport} onChange={(event) => setSport(event.target.value)} />
</div>


     </form>
  </div>
  );
}

export default AddAthlete;
