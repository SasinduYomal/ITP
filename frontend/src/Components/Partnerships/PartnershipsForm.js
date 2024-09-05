import React, { useState } from 'react';
import axios from 'axios';
import "../../App.css";

const PartnershipsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyName: '',
        website: '',
        proposal: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/proposals', formData);
            alert('Proposal submitted successfully!');
            // Reset the form fields after submission
            setFormData({
                name: '',
                email: '',
                companyName: '',
                website: '',
                proposal: ''
            });
        } catch (err) {
            console.error(err);
            alert('Error submitting proposal. Please try again.');
        }
    };

    return (
        <div className="partnership-form-container">
            <h2>Express Interest in Partnerships</h2>
            <p>Fill out the form below to express your interest in partnering with us. Provide as much detail as possible to help us understand your proposal.</p>
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

                <label htmlFor="companyName">Company Name:</label>
                <input 
                    type="text" 
                    id="companyName" 
                    name="companyName" 
                    value={formData.companyName} 
                    onChange={handleChange} 
                    placeholder="Enter your company name" 
                    required 
                />

                <label htmlFor="website">Company Website:</label>
                <input 
                    type="url" 
                    id="website" 
                    name="website" 
                    value={formData.website} 
                    onChange={handleChange} 
                    placeholder="Enter your company website URL" 
                />

                <label htmlFor="proposal">Your Proposal:</label>
                <textarea 
                    id="proposal" 
                    name="proposal" 
                    value={formData.proposal} 
                    onChange={handleChange} 
                    placeholder="Describe your proposal" 
                    required 
                />

                <button type="submit">Submit Proposal</button>
            </form>
        </div>
    );
};

export default PartnershipsForm;


