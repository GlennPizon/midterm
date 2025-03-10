const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 3000;

// Replace with your MySQL connection details
const sequelize = new Sequelize('your_database', 'your_user', 'your_password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define the User model using Sequelize
const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  status: DataTypes.STRING,
});

// Define a GET route for /users
app.get('/users', async (req, res) => {
  try {
    // Fetch all users from the database using Sequelize
    const users = await User.findAll();
    res.json(users); // Send the users as a JSON response
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' }); // Send an error response
  }
});

// Synchronize the model with the database and start the server
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});

// Testing considerations:
// - Verify that the server connects to the MySQL database successfully.
// - Access http://localhost:3000/users and verify that the users are returned as JSON.
// - Test with different database states (e.g., empty table, multiple users).
// - Test with invalid database credentials to ensure the server handles errors.
// - Verify that the database schema matches the Sequelize model.