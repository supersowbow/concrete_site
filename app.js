const express = require('express');
const pug = require('pug');
const path = require('path');

const app = express();

// View Engine
app.set('view engine', 'pug');

// Static Files
// app.use(express.static(path.join(__dirname,'pulbic')));
app.use('/static', express.static('public'));

const mainRoutes = require('./routes');
const adminRoute = require('./routes/admin');


app.use(mainRoutes);
app.use('/admin', adminRoute);

// Server
app.listen(3000, () => {
    console.log("Server is running...");
});
