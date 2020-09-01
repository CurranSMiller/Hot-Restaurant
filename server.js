const express = require('express');
const path = require('path');

const app = express();
const PORT = 7050;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//  Routes

app.get('/', (req, res) => {
  res.send("main page");
   // res.sendFile(path.join(__dirname, "main.html"));
});

app.get("/reservations", function(req, res) {
  res.send('reservations');
  // res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", function(req, res) {
  res.send('tables');
  // res.sendFile(path.join(__dirname, "reservations.html"));
});

app.listen(PORT, () => {
  console.log('App listening on port ' + PORT);
})



