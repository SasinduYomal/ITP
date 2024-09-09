const express = require('express');
const Proposal = require('../models/proposalModel');

// Create a router instance
const router = express.Router();

// POST route to handle proposal form submission
router.post('/proposals', async (req, res) => {
    const { name, email, companyName, website, proposal } = req.body;

    // Create a new proposal instance
    const newProposal = new Proposal({
        name,
        email,
        companyName,
        website,
        proposal
    });

    try {
        // Save the proposal to the database
        await newProposal.save();
        res.status(201).json({ message: 'Proposal submitted successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Error submitting proposal', error: err });
    }
});

// Export the router
module.exports = router;
