// routes/feedbackRoutes.js
const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// @route   POST /api/feedback
// @desc    Create new feedback
router.post('/feedback', async (req, res) => {
    const { name, email, rating, feedback } = req.body;
    try {
        const newFeedback = new Feedback({
            name,
            email,
            rating,
            feedback
        });
        await newFeedback.save();
        res.status(201).json(newFeedback);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET /api/feedback
// @desc    Get all feedback
router.get('/feedback', async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT /api/feedback/:id
// @desc    Update feedback by ID
router.put('/feedback/:id', async (req, res) => {
    const { name, email, rating, feedback } = req.body;
    try {
        const updatedFeedback = await Feedback.findByIdAndUpdate(
            req.params.id,
            { name, email, rating, feedback },
            { new: true }
        );
        if (!updatedFeedback) {
            return res.status(404).json({ msg: 'Feedback not found' });
        }
        res.status(200).json(updatedFeedback);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE /api/feedback/:id
// @desc    Delete feedback by ID
router.delete('/feedback/:id', async (req, res) => {
    try {
        const feedback = await Feedback.findByIdAndDelete(req.params.id);
        if (!feedback) {
            return res.status(404).json({ msg: 'Feedback not found' });
        }
        res.status(200).json({ msg: 'Feedback deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
