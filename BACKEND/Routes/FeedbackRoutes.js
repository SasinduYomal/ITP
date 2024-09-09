const express = require('express');
const Feedback = require('../models/feedbackModel');

// Create a router instance
const router = express.Router();

// POST route to handle feedback form submission
router.post('/feedback', async (req, res) => {
    const { name, email, rating, feedback } = req.body;

    // Create a new feedback instance
    const newFeedback = new Feedback({
        name,
        email,
        rating,
        feedback
    });

    try {
        // Save the feedback to the database
        await newFeedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Error submitting feedback', error: err });
    }
});

// Export the router
module.exports = router;

