const mongoose = require('mongoose');

// Create a schema for feedback
const feedbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    rating: { type: Number, required: true },
    feedback: { type: String, required: true }
});

// Create and export the model
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;

