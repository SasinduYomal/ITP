import React, { useState } from 'react';
import axios from 'axios';
import "../../App.css";

const CustomerFeedbackForm = ({ onFeedbackSubmitted }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rating: '',
        feedback: ''
    });

    const [loading, setLoading] = useState(false); // To handle loading state

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loading spinner or disable button
        try {
            await axios.post('http://localhost:5000/api/feedback', formData);
            alert('Thank you for your feedback!');
            setFormData({
                name: '',
                email: '',
                rating: '',
                feedback: ''
            });
            // Notify parent component that feedback was submitted
            if (onFeedbackSubmitted) {
                onFeedbackSubmitted();
            }
        } catch (err) {
            console.error('Error submitting feedback:', err.response?.data || err.message);
            alert('Error submitting feedback. Please try again.');
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className="feedback-form-container">
            <h2>Customer Feedback</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Enter your full name" 
                    required 
                />
                <input 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Enter your email address" 
                    required 
                />
                <select 
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
                <textarea 
                    name="feedback" 
                    value={formData.feedback} 
                    onChange={handleChange} 
                    placeholder="Write your feedback" 
                    required 
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Feedback'}
                </button>
            </form>
        </div>
    );
};

export default CustomerFeedbackForm;
