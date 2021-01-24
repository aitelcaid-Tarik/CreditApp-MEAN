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
                message: "Erreur, Veuillez réessayer plus tard"
            });
        }

        if (!user) {
            return res.send({
                success: false,
                message: "Erreur, Compte non trouvé"
            });
        }

        user.isPasswordMatch(password, user.password, (err, isMatch) => {

            //Invalid Password
            if (!isMatch) {
                return res.send({
                    success: false,
                    message: "Erreur, Mot de passe incorrect"
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
                message: "Vous pouvez connecter maintenant",
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
                message: "Echec de l'enregistrement "
            });
        }

        res.send({
            success: true,
            message: "Client enregistré",
            user
        });

    });

});


