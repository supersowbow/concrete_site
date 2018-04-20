const express = require('express');
const router = express.Router();

// Routes
router.get('/', (request, response) => {
    response.render('index');
});

router.get('/about', (request, response) => {
    response.render('about');
});

router.get('/services', (request, response) => {
    response.render('services');
});

router.get('/gallery', (request, response) => {
    response.render('gallery');
});

router.get('/contact', (request, response) => {
    response.render('contact');
});

module.exports = router;
