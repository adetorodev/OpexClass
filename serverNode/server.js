const http = require("http");
const fs = require("fs");
const path = require("path");

// Function to serve file
const serveFile = (res, filePath, contentType) => {
  fs.readFile(filePath, (err, data) => {
    // if (err) {
    //   res.writeHead(500);
    //   res.end("Error Loading page");
    // } else {
    res.writeHead(200, { "content-Type": contentType });
    res.end(data);
    // }
  });
};

// HTTP Server
const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    serveFile(res, path.join(__dirname, "index.html"), "text/html");
  } else if (req.url === "/about" || req.url === "/about.html") {
    serveFile(res, path.join(__dirname, "about.html"), "text/html");
  } else {
    // serveFile(res, path.join(__dirname, "404.html"), "text/html");
    res.writeHead(404, { "content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

// start the server
const Port = 4000;
server.listen(Port, () => {
  console.log(`Server is listen on http://localhost:${Port}`);
});
