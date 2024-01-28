// User.js

// Example model for user data

// Define the User schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // Add more fields as needed
});

// Create and export the User model
module.exports = mongoose.model('User', userSchema);
