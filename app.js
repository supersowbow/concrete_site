const express = require('express');
const pug = require('pug');

const app = express();

// View Engine
app.set('view engine', 'pug');

// Serve Static Files
app.use(express.static('css'));
app.use(express.static('img'));
app.use(express.static('js'));

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
