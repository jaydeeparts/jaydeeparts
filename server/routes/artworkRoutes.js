/ jaydeeparts/server/routes/artworkRoutes.js

const express = require('express');
const router = express.Router();

// Dummy artwork data
const artworks = [
  {
    _id: '1',
    title: 'Sunset Painting',
    description: 'Beautiful sunset scene',
    image: 'https://via.placeholder.com/300',
    price: 1500
  },
  {
    _id: '2',
    title: 'Abstract Colors',
    description: 'Modern abstract painting',
    image: 'https://via.placeholder.com/300',
    price: 1800
  }
];

// GET all artworks
router.get('/', (req, res) => {
  res.json(artworks);
});

module.exports = router;
