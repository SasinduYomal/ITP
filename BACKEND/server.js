const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
require('dotenv').config(); // Ensure environment variables are loaded

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Replaces body-parser for parsing JSON

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/feedbackDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
const feedbackRoutes = require('./routes/feedbackRoutes');
const proposalRoutes = require('./routes/proposals');
const preferencesRoutes = require('./routes/preferencesRoutes');

// Use routes
app.use('/api/feedback', feedbackRoutes);       // Feedback routes
app.use('/api/proposals', proposalRoutes);      // Proposals routes
app.use('/api/preferences', preferencesRoutes); // Preferences routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
