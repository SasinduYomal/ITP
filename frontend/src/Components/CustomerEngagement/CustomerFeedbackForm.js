import React, { useState } from 'react';
import axios from 'axios';
import "../../App.css";

const CustomerFeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rating: '',
        feedback: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/feedback', formData);
            alert('Thank you for your feedback!');
            // Reset the form fields after submission
            setFormData({
                name: '',
                email: '',
                rating: '',
                feedback: ''
            });
        } catch (err) {
            console.error(err);
            alert('Error submitting feedback. Please try again.');
        }
    };

    return (
        <div className="feedback-form-container">
            <h2>Customer Feedback</h2>
            <p>We appreciate your feedback! Please fill out the form below to help us improve our services.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Enter your full name" 
                    required 
                />

                <label htmlFor="email">Your Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Enter your email address" 
                    required 
                />

                <label htmlFor="rating">Rating:</label>
                <select 
                    id="rating" 
                    name="rating" 
                    value={formData.rating} 
                    onChange={handleChange} 
                    required
                >
                    <option value="">Select a rating</option>
                    <option value="1">1 - Very Poor</option>
                    <option value="2">2 - Poor</option>
                    <option value="3">3 - Average</option>
                    <option value="4">4 - Good</option>
                    <option value="5">5 - Excellent</option>
                </select>

                <label htmlFor="feedback">Your Feedback:</label>
                <textarea 
                    id="feedback" 
                    name="feedback" 
                    value={formData.feedback} 
                    onChange={handleChange} 
                    placeholder="Write your feedback here" 
                    required 
                />

                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
};

export default CustomerFeedbackForm;
