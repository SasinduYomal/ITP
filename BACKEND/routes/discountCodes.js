const express = require('express');
const router = express.Router();
const DiscountCode = require('../models/DiscountCode');

// Get all discount codes (Read)
router.get('/', async (req, res) => {
    try {
        const codes = await DiscountCode.find();
        res.json(codes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single discount code by ID (Read)
router.get('/:id', async (req, res) => {
    try {
        const code = await DiscountCode.findById(req.params.id);
        if (code == null) {
            return res.status(404).json({ message: 'Cannot find discount code' });
        }
        res.json(code);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new discount code (Create)
router.post('/', async (req, res) => {
    const discountCode = new DiscountCode({
        code: req.body.code,
        discountPercentage: req.body.discountPercentage,
        expirationDate: req.body.expirationDate
    });

    try {
        const newCode = await discountCode.save();
        res.status(201).json(newCode);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a discount code (Update)
router.put('/:id', async (req, res) => {
    try {
        const updatedCode = await DiscountCode.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCode);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a discount code (Delete)
router.delete('/:id', async (req, res) => {
    try {
        await DiscountCode.findByIdAndDelete(req.params.id);
        res.json({ message: 'Discount code deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
