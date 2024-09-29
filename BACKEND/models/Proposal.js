// models/Proposal.js
const mongoose = require('mongoose');

const ProposalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    companyName: { type: String, required: true },
    website: { type: String, required: false },
    proposal: { type: String, required: true }
}, { timestamps: true });

const Proposal = mongoose.model('Proposal', ProposalSchema);

module.exports = Proposal;
