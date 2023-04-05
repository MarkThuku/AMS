const express = require('express');
const app = express();
const fs = require('fs');


let data = fs.readFileSync('data.json');
data = JSON.parse(data);

app.use(express.json());


app.post('/data', (req, res) => {
  
  const newData = req.body;

  
  data.push(newData);

  
  fs.writeFileSync('data.json', JSON.stringify(data));

 
  res.send({
    success: true,
  });
});


app.get('/data', (req, res) => {
 
  res.send(data);
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});