const mongoose = require('mongoose');

const discountCodeSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    discountPercentage: {
        type: Number,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('DiscountCode', discountCodeSchema);
