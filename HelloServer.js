var oHttp = require('http');

oHttp.createServer(function(request, response) {

    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    response.end('<p style="font-family: Arial">Hello Baby Love!</p>');

}).listen(8080);

console.log("JS running at 127.0.0.1:8080");