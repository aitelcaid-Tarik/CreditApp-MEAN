
const mongoose = require('mongoose');

const CreditSchema = mongoose.Schema({
    capital: { type: Number },
    taux: { type: Number },
    annuite: { type: Number },
    duree: { type: Number },
    date: { type: String },
    numCre: { type: Number },
    numClient: { type: Number, required: true }
})

const Credit = mongoose.model('Credit', CreditSchema);

module.exports = Credit;