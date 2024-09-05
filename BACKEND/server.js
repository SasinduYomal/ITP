const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
require('dotenv').config(); // Ensure environment variables are loaded

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Using body-parser as JSON parser

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/feedbackDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
const feedbackRoutes = require('./routes/feedbackRoutes'); // Assuming you have a feedbackRoutes file
app.use('/api/feedback', feedbackRoutes); // Feedback routes

// Additional routes if needed
const proposalRoutes = require('./routes/proposals'); // Assuming you have a proposals route file
app.use('/api/proposals', proposalRoutes); // Proposal routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

