var http = require("http");
var dateTime = require("./myFirstModule");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The current date and time are: " + dateTime.myDateTime());
    res.end();
  })
  .listen(8080);
