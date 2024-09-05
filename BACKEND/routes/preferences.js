// routes/preferencesRoutes.js
const express = require('express');
const Preferences = require('../models/preferences');
const router = express.Router();

// Update or create user preferences
router.post('/:userId', async (req, res) => {
  const { userId } = req.params;
  const { receiveEmail, receiveSMS, receiveAppNotifications, frequency } = req.body;

  try {
    let preferences = await Preferences.findOne({ userId });
    if (preferences) {
      // Update existing preferences
      preferences.receiveEmail = receiveEmail;
      preferences.receiveSMS = receiveSMS;
      preferences.receiveAppNotifications = receiveAppNotifications;
      preferences.frequency = frequency;
    } else {
      // Create new preferences
      preferences = new Preferences({
        userId,
        receiveEmail,
        receiveSMS,
        receiveAppNotifications,
        frequency
      });
    }

    await preferences.save();
    res.json(preferences);
  } catch (error) {
    res.status(500).json({ error: 'Server error: Unable to update preferences' });
  }
});

// Get user preferences
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const preferences = await Preferences.findOne({ userId });
    if (preferences) {
      res.json(preferences);
    } else {
      res.status(404).json({ error: 'Preferences not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error: Unable to fetch preferences' });
  }
});

module.exports = router;
