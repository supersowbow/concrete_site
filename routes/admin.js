const express = require('express');
const router = express.Router();

// Routes
router.get('/admin', (request, response) => {
    response.render('admin');
});

module.exports = router;
