const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const historySchema = new Schema({
    donor_name : {
        type: String,
        required: true
    },
    donor_email: {
        type: String,
        required: true
    },
    donor_address : {
        type: String,
        required:true
    },
    amount: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    cv_rate: {
        type: String,
        required: true
    },
    hash : {
        type: String,
        required: true
    },
    tx_id : {
        type: String,
        required: true
    },
    item : {
        type: String,
        required : true
    },
    charities: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Charities'
        }
}, { timestamps: true });

module.exports = mongoose.model('Histories', historySchema);

