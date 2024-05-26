// const circle = require('./circle.js');
// console.log(`The area of a circle of radius 4 is ${circle.area(4)}`); 
const http = require('node:http');

const server = http.createServer((req, res) => {
      if (req.url === '/') {
        res.end('Welcome to our home page')
      }
    }
  )
  
  server.listen(5000)