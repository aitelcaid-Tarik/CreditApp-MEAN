//Bring in all depencies
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

//Initiailize app with express
const app = express();

const UserRoutes = require('./routes/users.js');
const CreditRoutes = require('./routes/credits.js');


//Database Connection
mongoose.connect(process.env.DATABASE, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    console.log('Connected to the database');
})
mongoose.connection.on('error', (err) => {
    console.log('Unable to connect to the database' + err);
})

//---------------- MiddleWares -------------//
//Body Parser MW
app.use(bodyParser.json());


//Passport MW
app.use(passport.initialize());
app.use(passport.session());


//---------------- MiddleWares -------------//

app.get('/', (req, res) => {
    res.send('I am alive')
});

app.use('/users', UserRoutes);
app.use('/credits', CreditRoutes)

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
