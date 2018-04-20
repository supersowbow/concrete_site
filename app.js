const express = require('express');
const pug = require('pug');

const app = express();

// View Engine
app.set('view engine', 'pug');

<<<<<<< HEAD
// Serve Static Files
app.use(express.static('css'));
app.use(express.static('img'));
app.use(express.static('js'));

// Routes
app.get('/', (request, response) => {
    response.render('index');
});
=======
const mainRoutes = require('./routes');
const adminRoute = require('./routes/admin');
>>>>>>> master

app.use(mainRoutes);
app.use('/admin', adminRoute);

// Server
app.listen(3000, () => {
    console.log("Server is running...");
});
