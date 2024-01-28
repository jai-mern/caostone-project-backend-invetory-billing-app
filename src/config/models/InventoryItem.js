// InventoryItem.js

// Example model for inventory items

// Define the InventoryItem schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventoryItemSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    // Add more fields as needed
});

// Create and export the InventoryItem model
module.exports = mongoose.model('InventoryItem', inventoryItemSchema);
