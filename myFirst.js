const http = require("http");
const url = require("url");
const dateTime = require("./myFirstModule");
const server = http.createServer(function (req, res) {
  const pathName = req.url;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("The current date and time are: " + dateTime.myDateTime());
  if (pathName === "/overview") {
    res.end("This is overview page");
  } else if (pathName === "/product") {
    res.end("This is product page");
  } else {
    res.end();
  }
});
server.listen(8088, "127.0.0.1", () => {
  console.log("Listening to request has started in port 8088");
});
