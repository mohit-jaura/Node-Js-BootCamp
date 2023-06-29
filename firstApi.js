const http = require("http");
const url = require("url");
const fileSystem = require("fs");

const productData = fileSystem.readFileSync(
  `${__dirname}/1-node-farm/starter/dev-data/data.json`,
  "utf-8"
);
const productDataJson = JSON.parse(productData);
const server = http.createServer(function (req, res) {
  const { query, pathname } = url.parse(req.url, true);
  res.writeHead(200, { "Content-Type": "text/html" });
  if (pathname === "/overview") {
    res.end("This is overview page");
  } else if (pathname === "/product") {
    const product = productDataJson[query.id];
    res.end(JSON.stringify(product));
  } else if (pathname === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(productData);
  } else {
    res.end();
  }
});
server.listen(8088, "127.0.0.1", () => {
  console.log("Listening to request has started in port 8088");
});
