// jaydeeparts/server/main.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Import artwork routes
const artworkRoutes = require('./routes/artworkRoutes');

// Use artwork routes
app.use('/api/artworks', artworkRoutes);

// Root route (optional)
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

