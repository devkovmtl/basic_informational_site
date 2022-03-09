const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const urlPathname = req.url;

  console.log(urlPathname);

  switch (urlPathname) {
    case '/':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      fs.readFile(
        path.join(__dirname, '/public', 'index.html'),
        'utf8',
        (err, data) => {
          if (err) {
            console.log(err);
            return;
          }
          res.end(data);
        }
      );
      break;
    case '/about':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      fs.readFile(
        path.join(__dirname, '/public', 'about.html'),
        'utf8',
        (err, data) => {
          if (err) {
            console.log(err);
            return;
          }
          res.end(data);
        }
      );
      break;
    case '/contact':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      fs.readFile(
        path.join(__dirname, '/public', 'contact.html'),
        'utf8',
        (err, data) => {
          if (err) {
            console.log(err);
            return;
          }
          res.end(data);
        }
      );
      break;

    default:
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      fs.readFile(
        path.join(__dirname, '/public', '404.html'),
        'utf8',
        (err, data) => {
          if (err) {
            console.log(err);
            return;
          }
          res.end(data);
        }
      );
      break;
  }
});

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
