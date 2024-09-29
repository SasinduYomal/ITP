import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackList = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rating: '',
        feedback: ''
    });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    const fetchFeedbacks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/feedback');
            setFeedbacks(response.data);
        } catch (err) {
            console.error(err);
            alert('Error fetching feedback.');
        }
    };

    const handleEdit = (feedback) => {
        setFormData(feedback);
        setEditMode(true);
        setEditingId(feedback._id);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/feedback/${id}`);
            alert('Feedback deleted successfully.');
            fetchFeedbacks();
        } catch (err) {
            console.error(err);
            alert('Error deleting feedback.');
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/feedback/${editingId}`, formData);
            alert('Feedback updated successfully!');
            setEditMode(false);
            setEditingId(null);
            fetchFeedbacks();
        } catch (err) {
            console.error(err);
            alert('Error updating feedback.');
        }
    };

    return (
        <div className="feedback-list-container">
            <h3>Feedback List</h3>
            <table className="feedback-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Rating</th>
                        <th>Feedback</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks.map((feedback) => (
                        <tr key={feedback._id}>
                            <td>{feedback.name}</td>
                            <td>{feedback.email}</td>
                            <td>{feedback.rating}</td>
                            <td>{feedback.feedback}</td>
                            <td>
                                <button onClick={() => handleEdit(feedback)}>Edit</button>
                                <button onClick={() => handleDelete(feedback._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editMode && (
                <div className="edit-form-container">
                    <h3>Edit Feedback</h3>
                    <form onSubmit={handleUpdate}>
                        <input name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} required />
                        <input name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} required />
                        <select name="rating" value={formData.rating} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} required>
                            <option value="">Select a rating</option>
                            <option value="1">1 - Very Poor</option>
                            <option value="2">2 - Poor</option>
                            <option value="3">3 - Average</option>
                            <option value="4">4 - Good</option>
                            <option value="5">5 - Excellent</option>
                        </select>
                        <textarea name="feedback" value={formData.feedback} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} required />
                        <button type="submit">Update Feedback</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default FeedbackList;
