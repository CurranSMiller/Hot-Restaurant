const express = require('express');
const path = require('path');

const app = express();
const PORT = 7050;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send("App listening on port " + PORT);
})

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});