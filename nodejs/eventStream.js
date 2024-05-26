// An event stream is like a conveyor belt in a factory. Imagine a conveyor belt that carries packages. Some parts of the conveyor belt can be where you place packages (input), and other parts can be where you take packages off (output). In Node.js, we use streams to handle chunks of data in a similar way.

// Types of Streams
// Readable Streams: These streams let you read data from a source.
// Writable Streams: These streams let you write data to a destination.
// Duplex Streams: These streams can both read and write.
// Transform Streams: These are duplex streams that can modify the data as it passes through.

const fs = require('fs');

// Create a readable stream
const readableStream = fs.createReadStream('example.txt', { encoding: 'utf8' });

// When data is available, this event handler is called
readableStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
});

// When no more data is available, this event handler is called
readableStream.on('end', () => {
    console.log('No more data.');
});

// If there's an error, this event handler is called
readableStream.on('error', (err) => {
    console.error('Error reading file:', err);
});
