const mongoose = require('mongoose');
const genres = require('./routes/genres');
const express = require('express');
const app = express();

// connect to our db
mongoose.connect('mongodb://localhost/Movies')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));
// general middleware
app.use(express.json());
app.use('/api/genres', genres);
//port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));