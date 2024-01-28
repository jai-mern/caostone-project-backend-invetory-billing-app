// billingRoutes.js

const express = require('express');
const router = express.Router();
const billingController = require('/billingController');

// Define routes for billing and transactions
router.post('/generate-bill', billingController.generateBill);
router.get('/bills', billingController.getAllBills);
router.get('/bills/:id', billingController.getBillById);
// Add more routes as needed

module.exports = router;
