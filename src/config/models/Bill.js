// Bill.js

// Example model for bills and transactions

// Define the Bill schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const billSchema = new Schema({
    items: [{ type: Schema.Types.ObjectId, ref: 'InventoryItem' }],
    totalAmount: { type: Number, required: true },
    // Add more fields as needed
});

// Create and export the Bill model
module.exports = mongoose.model('Bill', billSchema);
