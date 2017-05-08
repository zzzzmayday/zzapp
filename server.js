'use strict';

var http = require('http');
var fs = require('fs');

var server = http.createServer((request, response) => {
    console.log(request.method + ': ' + request.url);
            fs.createReadStream('./demo.html').pipe(response);
});

var serverPort = process.env.PORT || 5000;

server.listen(serverPort);

console.log(`[Rocka Node Server] Running at http://127.0.0.1:${serverPort}/`);
