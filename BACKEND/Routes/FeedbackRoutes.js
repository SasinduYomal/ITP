const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// POST: Submit feedback
router.post('/', async (req, res) => {
    const { name, email, rating, feedback } = req.body;

    try {
        const newFeedback = new Feedback({
            name,
            email,
            rating,
            feedback
        });
        
        await newFeedback.save();
        res.status(200).json({ message: 'Feedback submitted successfully!' });
    } catch (error) {
        console.error('Error submitting feedback:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

module.exports = router;
