// models/Feedback.js
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    feedback: { type: String, required: true },
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
