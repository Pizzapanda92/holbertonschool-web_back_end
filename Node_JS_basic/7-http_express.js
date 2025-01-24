const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const students = await countStudents(process.argv[2]);
    res.type('text/plain');
    res.send(`This is the list of our students\n${students}`);
  } catch (error) {
    res.type('text/plain');
    res.status(500).send('Cannot load the database');
  }
});

app.listen(port);

module.exports = app;
