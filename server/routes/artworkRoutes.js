// jaydeeparts/server/routes/artworkRoutes.js

const express = require('express');
const router = express.Router();

// Dummy sample artworks (You can connect to MongoDB later)
const sampleArtworks = [
  {
    _id: "1",
    title: "Sunset Over Hills",
    description: "A beautiful sunset over rolling hills.",
    image: "https://via.placeholder.com/300",
    price: 1999
  },
  {
    _id: "2",
    title: "Abstract Dream",
    description: "Colorful abstract expression of a dreamscape.",
    image: "https://via.placeholder.com/300",
    price: 2499
  }
];

// GET all artworks
router.get('/', (req, res) => {
  res.json(sampleArtworks);
});

module.exports = router;
