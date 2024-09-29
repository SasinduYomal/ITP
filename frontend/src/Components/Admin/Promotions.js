import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Promotions = () => {
    const [promotions, setPromotions] = useState([]);
    const [formData, setFormData] = useState({ title: '', description: '', code: '', expiration: '' });

    // Fetch all promotions
    useEffect(() => {
        fetchPromotions();
    }, []);

    const fetchPromotions = async () => {
        try {
            const response = await axios.get('/api/promotions');
            setPromotions(response.data);
        } catch (error) {
            console.error('Error fetching promotions', error);
        }
    };

    // Create a new promotion
    const createPromotion = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/promotions', formData);
            fetchPromotions();
            setFormData({ title: '', description: '', code: '', expiration: '' });
        } catch (error) {
            console.error('Error creating promotion', error);
        }
    };

    // Update an existing promotion
    const updatePromotion = async (id) => {
        try {
            await axios.put(`/api/promotions/${id}`, formData);
            fetchPromotions();
            setFormData({ title: '', description: '', code: '', expiration: '' });
        } catch (error) {
            console.error('Error updating promotion', error);
        }
    };

    // Delete a promotion
    const deletePromotion = async (id) => {
        try {
            await axios.delete(`/api/promotions/${id}`);
            fetchPromotions();
        } catch (error) {
            console.error('Error deleting promotion', error);
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="promotions">
            <h2>Current Promotions</h2>
            <form onSubmit={createPromotion}>
                <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
                <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
                <input type="text" name="code" placeholder="Code" value={formData.code} onChange={handleChange} required />
                <input type="date" name="expiration" value={formData.expiration} onChange={handleChange} required />
                <button type="submit">Add Promotion</button>
            </form>

            {promotions.map(promotion => (
                <div className="promotion" key={promotion._id}>
                    <h3>{promotion.title}</h3>
                    <p>{promotion.description}</p>
                    <p><strong>Promo code:</strong> {promotion.code}</p>
                    <p><strong>Expires on:</strong> {new Date(promotion.expiration).toLocaleDateString()}</p>
                    <button onClick={() => updatePromotion(promotion._id)}>Edit</button>
                    <button onClick={() => deletePromotion(promotion._id)}>Delete</button>
                </div>
            ))}
        </section>
    );
};

export default Promotions;
