const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // For loading environment variables

// Import routes
const feedbackRoutes = require('./routes/feedbackRoutes');
const proposalsRoutes = require('./routes/proposals');  // Renamed for clarity
const discountsRouter = require('./routes/discounts');  // Import the discounts routes
const promotionsRouter = require('./routes/promotions');  // Import the promotions routes
const discountCodesRouter = require('./routes/discountCodes'); // Import the discount codes routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));  // To allow Cross-Origin Resource Sharing (CORS)
app.use(express.json());  // To parse incoming JSON requests

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || process.env.DATABASE_URL || 'mongodb://localhost:27017/feedback', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/feedback', feedbackRoutes);       // Use the feedback routes
app.use('/api/proposals', proposalsRoutes);     // Use the proposals routes
app.use('/api/discounts', discountsRouter);     // Use the discounts router
app.use('/api/promotions', promotionsRouter);   // Use the promotions router
app.use('/api/discount-codes', discountCodesRouter); // Use the discount codes router

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
