import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Discounts = () => {
    const [discounts, setDiscounts] = useState([]);
    const [formData, setFormData] = useState({ title: '', description: '', code: '', expiration: '' });

    // Fetch all discounts
    useEffect(() => {
        fetchDiscounts();
    }, []);

    const fetchDiscounts = async () => {
        try {
            const response = await axios.get('/api/discounts');
            setDiscounts(response.data);
        } catch (error) {
            console.error('Error fetching discounts', error);
        }
    };

    // Create a new discount
    const createDiscount = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/discounts', formData);
            fetchDiscounts();
            setFormData({ title: '', description: '', code: '', expiration: '' });
        } catch (error) {
            console.error('Error creating discount', error);
        }
    };

    // Update an existing discount
    const updateDiscount = async (id) => {
        try {
            await axios.put(`/api/discounts/${id}`, formData);
            fetchDiscounts();
            setFormData({ title: '', description: '', code: '', expiration: '' });
        } catch (error) {
            console.error('Error updating discount', error);
        }
    };

    // Delete a discount
    const deleteDiscount = async (id) => {
        try {
            await axios.delete(`/api/discounts/${id}`);
            fetchDiscounts();
        } catch (error) {
            console.error('Error deleting discount', error);
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="discounts">
            <h2>Available Discounts</h2>
            <form onSubmit={createDiscount}>
                <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
                <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
                <input type="text" name="code" placeholder="Code" value={formData.code} onChange={handleChange} required />
                <input type="date" name="expiration" value={formData.expiration} onChange={handleChange} required />
                <button type="submit">Add Discount</button>
            </form>

            {discounts.map(discount => (
                <div className="discount" key={discount._id}>
                    <h3>{discount.title}</h3>
                    <p>{discount.description}</p>
                    <p><strong>Promo code:</strong> {discount.code}</p>
                    <p><strong>Expires on:</strong> {new Date(discount.expiration).toLocaleDateString()}</p>
                    <button onClick={() => updateDiscount(discount._id)}>Edit</button>
                    <button onClick={() => deleteDiscount(discount._id)}>Delete</button>
                </div>
            ))}
        </section>
    );
};

export default Discounts;
