const http = require('http');
const countStudents = require('./3-read_file_async');

const filename = process.argv[2];
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const students = await countStudents(filename);
      res.end(`This is the list of our students\n${students}`);
    } catch (error) {
      res.statusCode = 500;
      res.end('Cannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port);

module.exports = app;
