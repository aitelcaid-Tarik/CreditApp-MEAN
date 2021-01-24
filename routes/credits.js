const express = require('express');
const router = express.Router();
const passport = require('passport');
const Credit = require('../models/credit.js')


//calcul Annuite
router.post('/calculAnnuite', passport.authenticate('jwt', { session: false }), (req, res) => {

    const c = parseFloat(req.body.capital);
    const taux = parseFloat(req.body.taux);
    const d = parseFloat(req.body.duree);

    const t = Math.pow(1 + taux, (1 / 12)) - 1;

    const result = (Math.pow(1 + t, d) * t * c) / (Math.pow(1 + t, d) - 1);

    res.send(result.toFixed(2));

});


//calcul Capital
router.post('/calculCapital', passport.authenticate('jwt', { session: false }), (req, res) => {

    const a = parseFloat(req.body.annuite);
    const taux = parseFloat(req.body.taux);
    const d = parseFloat(req.body.duree);

    const t = Math.pow(1 + taux, 1 / 12) - 1;

    const result = (Math.pow(1 + t, d) * a - a) / (Math.pow(1 + t, d) * t);

    res.send(result.toFixed(2));

});


//calcul Duree
router.post('/calculDuree', passport.authenticate('jwt', { session: false }), (req, res) => {

    const c = parseFloat(req.body.capital);
    const taux = parseFloat(req.body.taux);
    const a = parseFloat(req.query.annuite);

    const t = Math.pow(1 + taux, 1 / 12) - 1;

    const result = ((Math.log(a / (a - t * c)) / (Math.log(1 + t))) + 0.5);

    res.send(result.toFixed(2));

});


//Add new Credit
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
    const credit = new Credit({
        capital: req.body.capital,
        taux: req.body.taux,
        annuite: req.body.annuite,
        duree: req.body.duree,
        date: req.body.date,
        idClient: req.body.idClient
    });

    credit.save((err, credit) => {
        if (err) {
            return res.send({
                success: false,
                message: "Erreur lors de l'enregistrement , Veuillez réessayer plus tard"
            });
        }

        if (!credit) {
            return res.send({
                success: false,
                message: "Echec de l'enregistrement du credit"
            });
        }

        return res.send({
            success: true,
            credit,
            message: "Credit enregistré"
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
                message: "Erreur lors de la récupération des credits"
            });
        }

        if (!credits) {
            return res.send({
                success: false,
                message: "Vous n'avez pas des credits"
            });
        }

        return res.send({
            success: true,
            credits
        });

    });
});

module.exports = router;


