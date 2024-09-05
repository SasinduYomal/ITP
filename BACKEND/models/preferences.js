
const mongoose = require('mongoose');

const preferencesSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true, 
    ref: 'User' // Assuming you have a User model for authenticated users
  },
  receiveEmail: { type: Boolean, default: true },
  receiveSMS: { type: Boolean, default: true },
  receiveAppNotifications: { type: Boolean, default: true },
  frequency: { type: String, enum: ['daily', 'weekly', 'monthly'], default: 'daily' }
});

const Preferences = mongoose.model('Preferences', preferencesSchema);
module.exports = Preferences;
