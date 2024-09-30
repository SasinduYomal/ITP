const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

// Import routes
const feedbackRoutes = require('./routes/feedbackRoutes');
const proposalsRoutes = require('./routes/proposals'); // Make sure these routes exist
const promotionsRouter = require('./routes/promotions'); // Make sure these routes exist


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Enable CORS for the frontend app
app.use(express.json()); // Parse incoming JSON requests

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/feedbackDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/feedback', feedbackRoutes);       // Feedback routes
app.use('/api/proposals', proposalsRoutes);     // Proposals routes
app.use('/api/promotions', promotionsRouter);   // Promotions routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
