import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Feedback Form Component
const FeedbackForm = ({ formData, handleChange, handleSubmit, loading, editingFeedbackId, errorMessages }) => (
    <div style={{
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}>
        <h2>Customer Feedback</h2>
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
            {errorMessages.name && <p style={{ color: 'red', margin: '0 0 10px' }}>{errorMessages.name}</p>}
            
            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
            {errorMessages.email && <p style={{ color: 'red', margin: '0 0 10px' }}>{errorMessages.email}</p>}
            
            <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            >
                <option value="">Select a rating</option>
                <option value="1">1 - Very Poor</option>
                <option value="2">2 - Poor</option>
                <option value="3">3 - Average</option>
                <option value="4">4 - Good</option>
                <option value="5">5 - Excellent</option>
            </select>
            {errorMessages.rating && <p style={{ color: 'red', margin: '0 0 10px' }}>{errorMessages.rating}</p>}
            
            <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                placeholder="Write your feedback"
                required
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
            {errorMessages.feedback && <p style={{ color: 'red', margin: '0 0 10px' }}>{errorMessages.feedback}</p>}
            
            <button
                type="submit"
                disabled={loading}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }}
            >
                {loading ? 'Submitting...' : editingFeedbackId ? 'Update Feedback' : 'Submit Feedback'}
            </button>
        </form>
    </div>
);

// Feedback List Component
const FeedbackList = ({ feedbackList, handleEdit, handleDelete }) => (
    <div style={{}}>
        <h3 style={{marginTop:'40px',textAlign:'center'}}>Feedback List</h3>
        <table style={{ width: '1000px', borderCollapse: 'collapse',tableLayout:'fixed' }}>
            <thead>
                <tr>
                    <th style={{ border: '1px solid #ddd', padding: '8px',width:'200px' }}>Name</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px',width:'300px' }}>Email</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px',width:'75px'}}>Rating</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px',width:'250px' }}>Feedback</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px',width:'120px' }}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {feedbackList.map(feedback => (
                    <tr key={feedback._id}>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{feedback.name}</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{feedback.email}</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{feedback.rating}</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{feedback.feedback}</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                            <button
                                onClick={() => handleEdit(feedback)}
                                style={{ marginRight: '10px', padding: '5px', backgroundColor: '#2196F3', color: 'white', border: 'none', cursor: 'pointer' }}
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(feedback._id)}
                                style={{ padding: '5px', backgroundColor: '#f44336', color: 'white', border: 'none', cursor: 'pointer' }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

// Main Component with both FeedbackForm and FeedbackList
const CustomerFeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rating: '',
        feedback: '',
    });
    const [loading, setLoading] = useState(false);
    const [feedbackList, setFeedbackList] = useState([]);
    const [editingFeedbackId, setEditingFeedbackId] = useState(null); // For editing state
    const [errorMessages, setErrorMessages] = useState({}); // State to hold error messages

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/feedback');
            setFeedbackList(response.data);
        } catch (err) {
            console.error('Error fetching feedback:', err);
        }
    };

    // Validation Function
    const validateForm = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const namePattern = /^[a-zA-Z\s]{3,}$/;
        const nonNumericPattern = /[^\d]/;
        const errors = {}; // Object to hold error messages

        // Validate name
        if (!namePattern.test(formData.name)) {
            errors.name = 'Name should be at least 3 characters long and contain only letters and spaces.';
        }

        // Validate email
        if (!emailPattern.test(formData.email)) {
            errors.email = 'Please enter a valid email address.';
        }

        // Validate rating
        if (formData.rating < 1 || formData.rating > 5) {
            errors.rating = 'Please select a valid rating between 1 and 5.';
        }

        // Validate feedback length
        if (formData.feedback.trim() === "") {
            errors.feedback = 'Please write your feedback.';
        } else if (formData.feedback.length < 10) {
            errors.feedback = 'Feedback should be at least 10 characters long.';
        }

        // Validate feedback is not only numbers
        if (!nonNumericPattern.test(formData.feedback)) {
            errors.feedback = 'Feedback cannot contain only numbers. Please provide more meaningful feedback.';
        }

        setErrorMessages(errors); // Set error messages
        return Object.keys(errors).length === 0; // Return true if no errors
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrorMessages({ ...errorMessages, [e.target.name]: '' }); // Clear error message on change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Stop if validation fails
        }

        setLoading(true);
        try {
            if (editingFeedbackId) {
                await axios.put(`http://localhost:5000/api/feedback/${editingFeedbackId}`, formData);
                alert('Feedback updated successfully!');
            } else {
                await axios.post('http://localhost:5000/api/feedback', formData);
                alert('Thank you for your feedback!');
            }
            setFormData({ name: '', email: '', rating: '', feedback: '' });
            setEditingFeedbackId(null); // Reset editing state
            fetchFeedback(); // Refresh feedback list
        } catch (err) {
            console.error('Error submitting feedback:', err.response?.data || err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (feedback) => {
        setFormData({ name: feedback.name, email: feedback.email, rating: feedback.rating, feedback: feedback.feedback });
        setEditingFeedbackId(feedback._id); // Set feedback ID for editing
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            try {
                await axios.delete(`http://localhost:5000/api/feedback/${id}`);
                fetchFeedback(); // Refresh feedback list
            } catch (err) {
                console.error('Error deleting feedback:', err);
            }
        }
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <FeedbackForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                loading={loading}
                editingFeedbackId={editingFeedbackId}
                errorMessages={errorMessages} // Pass error messages to FeedbackForm
            />
            <FeedbackList
                feedbackList={feedbackList}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default CustomerFeedbackForm;
