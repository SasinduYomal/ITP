const express = require('express');
const router = express.Router();
const Promotion = require('../models/Promotion');

// Get all promotions (Read)
router.get('/', async (req, res) => {
    try {
        const promotions = await Promotion.find();
        res.json(promotions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a promotion (Create)
router.post('/', async (req, res) => {
    const promotion = new Promotion({
        title: req.body.title,
        description: req.body.description,
        code: req.body.code,
        expiration: req.body.expiration
    });

    try {
        const newPromotion = await promotion.save();
        res.status(201).json(newPromotion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a promotion (Update)
router.put('/:id', async (req, res) => {
    try {
        const updatedPromotion = await Promotion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPromotion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a promotion (Delete)
router.delete('/:id', async (req, res) => {
    try {
        await Promotion.findByIdAndDelete(req.params.id);
        res.json({ message: 'Promotion deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
