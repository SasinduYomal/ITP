const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedbackModel');

// POST: Submit feedback
router.post('/feedback', async (req, res) => {
    try {
        const newFeedback = new Feedback(req.body);
        await newFeedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error submitting feedback', error: err });
    }
});

// GET: Fetch all feedback
router.get('/feedback', async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.json(feedbacks);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching feedback', error: err });
    }
});

module.exports = router;
