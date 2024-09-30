// routes/feedbackRoutes.js
const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// Create feedback
router.post('/', async (req, res) => {
    const newFeedback = new Feedback(req.body);
    try {
        const savedFeedback = await newFeedback.save();
        res.status(201).json(savedFeedback);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Read all feedback
router.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update feedback
router.put('/:id', async (req, res) => {
    try {
        const updatedFeedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFeedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }
        res.status(200).json(updatedFeedback);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete feedback
router.delete('/:id', async (req, res) => {
    try {
        const deletedFeedback = await Feedback.findByIdAndDelete(req.params.id);
        if (!deletedFeedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
