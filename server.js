//Bring in all depencies
require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
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
//CROS MW
app.use(cors());
//Body Parser MW
app.use(bodyParser.json());


//Passport MW
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
//---------------- MiddleWares -------------//


//Static public folder
app.use(express.static(path.join(__dirname, 'public')));

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
