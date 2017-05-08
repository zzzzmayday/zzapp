'use strict';

var http = require('http');
var fs = require('fs');

var server = http.createServer((request, response) => {
    var url = request.url;
    console.log(request.method + ': ' + url);
    fs.createReadStream(url).pipe(response);
});

var serverPort = process.env.PORT || 5000;

server.listen(serverPort);

console.log(`[Rocka Node Server] Running at http://127.0.0.1:${serverPort}/`);
