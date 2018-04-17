const express = require('express');
const pug = require('pug');

const app = express();

// View Engine
app.set('view engine', 'pug');

// Routes
app.get('/', (request, response) => {
    response.render('index');
});

app.get('/about', (request, response) => {
    response.render('about');
});

// Server
app.listen(3000, () => {
    console.log("Server is running...");
});
