// Importing the required modules
const http = require('http');

// Creating a server instance
const server = http.createServer((req, res) => {
  // Set the response header with status code 200 and content type
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Sending the response
  res.end('Aditya,joshi!\n');
});

// Define the port the server will listen to
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
