const express = require('express');
const router = express.Router();
const passport = require('passport');
const Credit = require('../models/credit.js')


//Add new Credit
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
    const credit = new Credit({
        capital: req.body.capital,
        taux: req.body.taux,
        annuite: req.body.annuite,
        duree: req.body.duree,
        date: req.body.date,
        numCre: req.body.numCre,
        idClient: req.body.idClient
    });

    credit.save((err, credit) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error while saving, Please try again'
            });
        }

        if (!credit) {
            return res.send({
                success: false,
                message: 'Failed to save the credit'
            });
        }

        return res.send({
            success: true,
            credit,
            message: 'Credit saved'
        });

    });
});

//List all Credits
router.post('/list', passport.authenticate('jwt', { session: false }), (req, res) => {
    const idClient = req.body.idClient;
    Credit.find({ idClient }, (err, credits) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error while retrieving the credits'
            });
        }

        if (!credits) {
            return res.send({
                success: false,
                message: 'You have no credits yet'
            });
        }

        return res.send({
            success: true,
            credits
        });

    });
});

module.exports = router;


