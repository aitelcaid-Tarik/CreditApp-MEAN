const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '707b8cccee3b4b281fffd96093b5940d-07bc7b05-bfac6a3c',
        domain: 'sandbox7f7a067cbb6f4bbc94634090f5bebc46.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: 'aitcredit123@gmail.com',
        to: email,
        subject,
        text
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

//email, subject, text
router.post('/send', (req, res) => {
    const { subject, email, text } = req.body;
    console.log('Data: ', req.body);

    sendMail(email, subject, text, function (err, data) {
        if (err) {
            console.log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });;
        }
        console.log('Email envoyé!!');
        return res.json({ message: 'Email envoyé!!!!' });;
    });
});


module.exports = router;