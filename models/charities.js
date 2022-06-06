const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const charitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: String,
    type: Array,
    image: {
        data : Buffer,
        contentType : String,
    }
}, { timestamps: true });

module.exports = mongoose.model('Charities', charitySchema);

