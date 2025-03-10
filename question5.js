// Import dependencies
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const PORT = 3000;

// Database Wrapper
class Database {
    constructor(dbName, username, password, options) {
        this.sequelize = new Sequelize(dbName, username, password, options);
    }

    async initialize() {
        try {
            await this.sequelize.authenticate();
            console.log('Connection to MySQL has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            process.exit(1); // Exit application on failure
        }
    }

    getSequelize() {
        return this.sequelize;
    }
}

// Initialize the database wrapper
const db = new Database('your_database_name', 'your_username', 'your_password', {
    host: 'localhost',
    dialect: 'mysql',
});

// Initialize the database connection
(async () => {
    await db.initialize();
})();

// Define User model
const User = db.getSequelize().define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'users',
    timestamps: false,
});

// Sync models
(async () => {
    try {
        await User.sync();
        console.log('User model synced successfully.');
    } catch (error) {
        console.error('Error syncing User model:', error);
    }
})();

// Define the /users route
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll(); // Fetch all users
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Unable to fetch users' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
