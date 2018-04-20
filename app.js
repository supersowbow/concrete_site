const express = require('express');
const pug = require('pug');

const app = express();

// View Engine
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const adminRoute = require('./routes/admin');

app.use(mainRoutes);
app.use('/admin', adminRoute);

// Server
app.listen(3000, () => {
    console.log("Server is running...");
});
