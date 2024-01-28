// Import required modules
const http = require('http');
const app = require('./app'); // Import the Express application from app.js

// Define the port number
const port = process.env.PORT || 3000;

// Create the HTTP server
const server = http.createServer(app);

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
