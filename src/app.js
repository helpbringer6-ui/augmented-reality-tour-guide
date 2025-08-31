const express = require('express');
const mongoose = require('mongoose');
const locationsRoute = require('./routes/locations');

const app = express();
app.use(express.json());
app.use('/api/locations', locationsRoute);

mongoose.connect('mongodb://localhost:27017/ar-tour-guide', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB verbunden...'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});