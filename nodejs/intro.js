// const amount = 9

// if (amount < 10){
//     console.log("small amount")
// } else {
//     console.log("large number")
// }

// console.log("This is nodejs")

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Home Page");
//   }
//   if (req.url === "/about") {
//     // blocking code
//     for (let i = 0; i < 1000; i++) {
//       for (let j = 0; j < 1000; j++) {
//         console.log(`${i} ${j}`);
//       }
//     }
//     res.end("About Page");
//   }
//   res.end("Error Page");
// });

// server.listen(5000, () => {
//   console.log("Server listening on port : 5000....");
// });

const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')