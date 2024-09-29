const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    expiration: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Promotion', promotionSchema);
