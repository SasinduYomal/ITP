import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css';

const CustomerFeedback = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rating: '1',
        comments: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/submit', formData);
            alert(response.data.message);
            setFormData({
                name: '',
                email: '',
                rating: '1',
                comments: ''
            });
        } catch (error) {
            console.error('Error submitting feedback', error);
        }
    };

    return (
        <section className="feedback-form">
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                </select>
                
                <label htmlFor="comments">Comments:</label>
                <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    required
                ></textarea>
                
                <button type="submit">Submit Feedback</button>
            </form>
        </section>
    );
};

export default CustomerFeedback;
