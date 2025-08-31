const express = require('express');
const router = express.Router();
const Location = require('../models/Location');

// Alle Standorte abrufen
router.get('/', async (req, res) => {
    const locations = await Location.find();
    res.json(locations);
});

// Einen neuen Standort hinzufügen
router.post('/', async (req, res) => {
    const newLocation = new Location(req.body);
    await newLocation.save();
    res.status(201).json(newLocation);
});

module.exports = router;