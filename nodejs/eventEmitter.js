 // Event Emitter
// pc
// responsding 

// This is crucial for building responsive applications, especially those that involve I/O operations like reading files, handling network requests, or interacting with databases.

// EventEmitters enable decoupling of different parts of your application. This means that components can communicate with each other without being tightly connected

/*
EventEmitter Class: The core class provided by Node.js to work with events.
Emit an Event: Broadcasting an event, like sending out a radio signal.
Listen for an Event: Setting up a function to run when a specific event occurs, like tuning a radio to a specific station.

*/

// Create an EventEmitter: We'll start by creating an EventEmitter object.
// Emit an Event: We'll emit an event from our EventEmitter.
// Listen for the Event: We'll set up a listener to respond when the event is emitted.

// const EventEmitter = require('events')

// //  create an instance of eventemitter

// const myEventEmitter = new EventEmitter()

// // listen to an event

// myEventEmitter.on('greet', (name) => {
//     console.log(`Hello, ${name}`)
// })

// // Emit the event
// myEventEmitter.emit('greet', 'John')

// const http = require('http');
// const EventEmitter = require('events');

// const server = http.createServer();
// const myEmitter = new EventEmitter();

// server.on('request', (req, res) => {
//     myEmitter.emit('requestReceived', req, res);
// });

// myEmitter.on('requestReceived', (req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello, world!\n');
// });

// server.listen(3000, () => {
//     console.log('Server is listening on port 3000');
// });