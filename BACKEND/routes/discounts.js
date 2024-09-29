const express = require('express');
const router = express.Router();
const Discount = require('../models/Discount');

// Get all discounts (Read)
router.get('/', async (req, res) => {
    try {
        const discounts = await Discount.find();
        res.json(discounts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a discount (Create)
router.post('/', async (req, res) => {
    const discount = new Discount({
        title: req.body.title,
        description: req.body.description,
        code: req.body.code,
        expiration: req.body.expiration
    });

    try {
        const newDiscount = await discount.save();
        res.status(201).json(newDiscount);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a discount (Update)
router.put('/:id', async (req, res) => {
    try {
        const updatedDiscount = await Discount.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedDiscount);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a discount (Delete)
router.delete('/:id', async (req, res) => {
    try {
        await Discount.findByIdAndDelete(req.params.id);
        res.json({ message: 'Discount deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
