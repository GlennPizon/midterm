const express = require('express'); // Import the Express.js library
const app = express(); // Create an Express application instance
const port = 3000; // Define the port number the server will listen on

// Define a GET route for /test
app.get('/test', (req, res) => {
  // Send a JSON response with a message and your full name
  res.json({ message: 'Express is working! Glenn Entia Pizon' });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`); // Log a message to the console
});

// Testing considerations:
// - Use a browser or Postman to access http://localhost:3000/test.
// - Verify that the JSON response is correctly formatted and contains the expected message.

//outputs: {"message":"Express is working! Glenn Entia Pizon"}


// - Test with different HTTP methods (e.g., POST, PUT) to ensure they return 404.


// - Check that the server handles concurrent requests gracefully.