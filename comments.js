//Create web server

const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    // Handle requests
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

// Start server
server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});
