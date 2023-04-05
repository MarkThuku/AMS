const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = 3030;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'athletes'
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('MySQL database connected successfully!');
  }
});

app.use(cors());
app.use(express.json());

// Route to get all athletes
app.get('/api/get', (req, res) => {
  db.query('SELECT * FROM athletes', (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred while retrieving athletes');
    } else {
      res.send(result);
    }
  });
});

// Route for creating the athlete
app.post('/api/create', (req, res) => {
  const { name, photoUrl, bio, height, weight, age, sport } = req.body;
  db.query(
    'INSERT INTO athletes (name, photoUrl, bio, height, weight, age, sport) VALUES (?,?,?,?,?,?,?)',
    [name, photoUrl, bio, height, weight, age, sport],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('An error occurred while creating the athlete');
      } else {
        console.log(result);
        res.send('Athlete created successfully!');
      }
    }
  );
});

// Route to delete an athlete
app.delete('/api/delete/:athleteNumber', (req, res) => {
  const athleteNumber = req.params.athleteNumber;
  db.query(
    'DELETE FROM athletes WHERE athleteNumber = ?',
    athleteNumber,
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('An error occurred while deleting the athlete');
      } else {
        res.send('Athlete deleted successfully!');
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
