const mongoose = require('mongoose');

const ProposalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  companyName: { type: String, required: true },
  website: { type: String },
  proposal: { type: String, required: true },
  dateSubmitted: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Proposal', ProposalSchema);
