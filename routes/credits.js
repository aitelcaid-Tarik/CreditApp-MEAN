

const express = require('express');
const router = express.Router();
const Credit = require('../models/credit.js')


//Add new Credit
router.post('/add',(req,res) => {
    return res.send('Add Credit');
});

//List all Credits
router.post('/list',(req,res) => {
    return res.send('list Credits');
});

module.exports = router;


