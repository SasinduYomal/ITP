// routes/proposals.js
const express = require('express');
const router = express.Router();
const Proposal = require('../models/Proposal');

// Get all proposals
router.get('/', async (req, res) => {
    try {
        const proposals = await Proposal.find();
        res.json(proposals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new proposal
router.post('/', async (req, res) => {
    const proposal = new Proposal(req.body);
    try {
        const savedProposal = await proposal.save();
        res.status(201).json(savedProposal);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a proposal
router.put('/:id', async (req, res) => {
    try {
        const updatedProposal = await Proposal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProposal);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a proposal
router.delete('/:id', async (req, res) => {
    try {
        await Proposal.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
