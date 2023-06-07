var http = require("http");
var fileSystem = require("fs");

http
  .createServer(function (req, res) {
    fileSystem.readFile("demofile1.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
