import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Feedback Form Component
const FeedbackForm = ({ formData, handleChange, handleSubmit, loading, editingFeedbackId }) => (
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
            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
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
            <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                placeholder="Write your feedback"
                required
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
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
    <div style={{
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}>
        <h3>Feedback List</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Rating</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Feedback</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
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
        if (!emailPattern.test(formData.email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (formData.rating < 1 || formData.rating > 5) {
            alert('Please select a valid rating.');
            return false;
        }

        return true;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
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
            alert('Error submitting feedback. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (feedback) => {
        setFormData(feedback);
        setEditingFeedbackId(feedback._id); // Set editing ID
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            try {
                await axios.delete(`http://localhost:5000/api/feedback/${id}`);
                alert('Feedback deleted successfully!');
                fetchFeedback(); // Refresh feedback list
            } catch (err) {
                console.error('Error deleting feedback:', err);
                alert('Error deleting feedback. Please try again.');
            }
        }
    };

    return (
        <div style={{ width: '80%', margin: '0 auto' }}>
            {/* Separated Customer Feedback Form */}
            <FeedbackForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                loading={loading}
                editingFeedbackId={editingFeedbackId}
            />

            {/* Add a div to create space */}
            <div style={{ margin: '40px 0' }}></div>

            {/* Separated Feedback List */}
            <FeedbackList
                feedbackList={feedbackList}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default CustomerFeedbackForm;
