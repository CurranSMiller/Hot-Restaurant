const express = require('express');
const path = require('path');

const app = express();
const PORT = 7050;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  Routes

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, "main.html"));
  res.send('main page');
});

app.get('/tables', (req, res) => {
  // res.sendFile(path.join(__dirname, "tables.html"));
  res.send('tables');
});

app.get('/reservations', (req, res) => {
  // res.sendFile(path.join(__dirname, "reservations.html"));
  res.send('reservations');
});





app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});