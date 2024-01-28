// authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Define routes for user authentication
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
// Add more routes as needed

module.exports = router;
