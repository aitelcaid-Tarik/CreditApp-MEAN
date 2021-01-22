

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

module.exports = router;

//login
router.post('/autho', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const query = { email }

    //Check the user exists
    User.findOne(query, (err, user) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error, please try again'
            });
        }

        if (!user) {
            return res.send({
                success: false,
                message: 'Error, Account not found'
            });
        }

        user.isPasswordMatch(password, user.password, (err, isMatch) => {

            //Invalid Password
            if (!isMatch) {
                return res.send({
                    success: false,
                    message: 'Error, Invalid Password'
                });
            }


            //User is Valid
            const ONE_DAY = 86400; //Token Validity in seconds

            //Generating the token 
            const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: ONE_DAY });

            let returnUser = {
                name: user.name,
                email: user.email,
                id: user._id
            }

            //Send the response back
            return res.send({
                success: true,
                message: 'You can login now',
                user: returnUser,
                token
            });

        })
    });
});


//Registration
router.post('/register', (req, res) => {
    //res.send('I am Registration');
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save((err, user) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Failed to save the user'
            });
        }

        res.send({
            success: true,
            message: 'user saved',
            user
        });

    });

});


