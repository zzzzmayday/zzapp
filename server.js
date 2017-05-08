'use strict';

var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var root = path.resolve('.');

var server = http.createServer((request, response) => {
    var pathName = url.parse(request.url).pathname;
    var filePath = path.join(root, pathName);
    var fileName = path.basename(filePath);
    console.log(request.method + ': ' + request.url);
    fs.createReadStream(filePath).pipe(response);
});

var serverPort = process.env.PORT || 5000;

server.listen(serverPort);

console.log(`[Rocka Node Server] Running at http://127.0.0.1:${serverPort}/`);
