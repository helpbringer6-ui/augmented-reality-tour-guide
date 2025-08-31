const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    coordinates: { type: [Number], required: true }, // [longitude, latitude]
    type: { type: String, enum: ['sight', 'restaurant', 'history'], required: true }
});

module.exports = mongoose.model('Location', locationSchema);