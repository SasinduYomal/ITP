const express = require('express');
const router = express.Router();
const Proposal = require('../models/proposalModel');

// POST: Submit a partnership proposal
router.post('/proposals', async (req, res) => {
    try {
        const newProposal = new Proposal(req.body);
        await newProposal.save();
        res.status(201).json({ message: 'Proposal submitted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error submitting proposal', error: err });
    }
});

// GET: Fetch all proposals
router.get('/proposals', async (req, res) => {
    try {
        const proposals = await Proposal.find();
        res.json(proposals);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching proposals', error: err });
    }
});

module.exports = router;
