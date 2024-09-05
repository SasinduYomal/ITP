const express = require('express');
const Proposal = require('../models/Proposal');

const router = express.Router();

// @route POST /api/proposals
// @desc Submit a new partnership proposal
router.post('/', async (req, res) => {
  try {
    const { name, email, companyName, website, proposal } = req.body;
    
    // Create a new proposal
    const newProposal = new Proposal({
      name,
      email,
      companyName,
      website,
      proposal
    });

    // Save the proposal to the database
    await newProposal.save();
    res.status(201).json({ message: 'Proposal submitted successfully!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

