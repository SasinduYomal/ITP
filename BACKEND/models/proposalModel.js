const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    companyName: { type: String, required: true },
    website: { type: String },
    proposal: { type: String, required: true }
}, { timestamps: true });

const Proposal = mongoose.model('Proposal', proposalSchema);

module.exports = Proposal;
