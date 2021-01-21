const express = require('express');
const router = express.Router();
const User = require('../models/user.js')

//login
router.post('/autho',(req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const query = {email}
    //Check the user exists
    User.findOne(query,(err,user)=>
        {
            if (err) {
                return res.send({
                    success : false,
                    message : 'Error, please try again'
                });
            }

            if (!user){
                return res.send({
                    success : false,
                    message : 'Error, Account not found'
                });
            }

            user.isPasswordMatch(password, user.password, (err, isMatch) => {
                if(!isMatch){
                    return res.send({
                        success : false,
                        message : 'Error, Invalid Password'
                    });
                    }
                
                let returnUser = {
                    name : user.name,
                    email : user.email,
                    id : user._id
                }
                return res.send({
                    success : true,
                    message : 'You can login now',
                    user 
                });

            })
        });
});


//Registration
router.post('/register',(req, res) => {
    //res.send('I am Registration');
    let newUser = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    });

    newUser.save((err, user) => {
        if (err) {
            return res.send({
                success : false,
                message : 'Failed to save the user'
            });
        }

        res.send({
                success : true,
                message : 'user saved',
                user
            });
            
    });

});


module.exports = router;