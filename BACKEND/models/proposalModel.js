const mongoose = require('mongoose');

// Create a schema for proposals
const proposalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    companyName: { type: String, required: true },
    website: { type: String },
    proposal: { type: String, required: true }
});

// Create and export the model
const Proposal = mongoose.model('Proposal', proposalSchema);

module.exports = Proposal;

