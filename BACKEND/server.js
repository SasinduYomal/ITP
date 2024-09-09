const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const feedbackRoutes = require('./routes/feedbackRoutes'); // Import feedback routes
const proposalRoutes = require('./routes/proposalRoutes'); // Import proposal routes

// Create an instance of express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/feedbackDB', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting to MongoDB:', err));

// Use the routes
app.use('/api', feedbackRoutes);
app.use('/api', proposalRoutes);

// Set up a simple GET route to check if the server is running
app.get('/', (req, res) => {
    res.send('API is running!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

