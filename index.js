'use strict'

let http = require('http');
let fs = require('fs');
let path = require('path');
let PORT = 3000

let returnIndex = (request, response) => {
  process.stdout.write('Responding with index.html\n')
  var filePath = path.join(__dirname, 'index.html');
  var stat = fs.statSync(filePath);
  response.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': stat.size
  });

  var readStream = fs.createReadStream(filePath);
  readStream.pipe(response);
}

let returnAJAXEndpoint = (request, response) => {
  process.stdout.write('Incoming request received for AJAX endpoint.\n')
}

let server = http.createServer(function (request, response) {
  if (request.url === '/') {
    returnIndex(request, response)
  }
  if (request.url === '/ajax-route') {
    returnAJAXEndpoint(request, response)
  }
}).listen(PORT, '127.0.0.1');

server.timeout = 3000;
process.stdout.write(`Server running on http://localhost:${PORT}\n`)