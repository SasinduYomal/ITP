import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PartnershipsTable = () => {
    const [proposals, setProposals] = useState([]); // Initialize with an empty array
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyName: '',
        website: '',
        proposal: ''
    });
    const [editingId, setEditingId] = useState(null);

    // Fetch proposals on component mount
    useEffect(() => {
        fetchProposals();
    }, []);

    // Fetch proposals from the backend
    const fetchProposals = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/proposals');
            setProposals(response.data);
        } catch (err) {
            console.error(err);
            alert('Error fetching proposals.');
        }
    };

    // Delete a proposal by ID
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/proposals/${id}`);
            alert('Proposal deleted successfully.');
            fetchProposals(); // Refresh the proposals list
        } catch (err) {
            console.error(err);
            alert('Error deleting proposal.');
        }
    };

    // Edit the selected proposal (pre-fill form data)
    const handleEdit = (proposal) => {
        setFormData(proposal);
        setEditMode(true);
        setEditingId(proposal._id);
    };

    // Update the proposal data
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/proposals/${editingId}`, formData);
            alert('Proposal updated successfully!');
            setEditMode(false);
            setEditingId(null);
            fetchProposals(); // Refresh the proposals list
        } catch (err) {
            console.error(err);
            alert('Error updating proposal.');
        }
    };

    return (
        <section>
            <h3>Existing Proposals</h3>
            <table className="proposal-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company Name</th>
                        <th>Website</th>
                        <th>Proposal</th>
                        <th>Status</th> {/* New column for status */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {proposals.length > 0 ? (
                        proposals.map((proposal) => (
                            <tr key={proposal._id}>
                                <td>{proposal.name}</td>
                                <td>{proposal.email}</td>
                                <td>{proposal.companyName}</td>
                                <td>{proposal.website}</td>
                                <td>{proposal.proposal}</td>
                                <td>{proposal.status || 'Pending'}</td> {/* Show status or 'Pending' */}
                                <td>
                                    {/* Edit button */}
                                    <button onClick={() => handleEdit(proposal)}>
                                        Edit
                                    </button>

                                    {/* Delete button with red background */}
                                    <button 
                                        onClick={() => handleDelete(proposal._id)} 
                                        style={{ backgroundColor: 'red', color: 'white' }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No proposals found.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Conditional rendering of the edit form */}
            {editMode && (
                <div className="edit-form-container">
                    <h3>Edit Proposal</h3>
                    <form onSubmit={handleUpdate}>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                            required
                        />
                        <input
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                            required
                        />
                        <input
                            name="companyName"
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                            required
                        />
                        <input
                            name="website"
                            value={formData.website}
                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                            required
                        />
                        <textarea
                            name="proposal"
                            value={formData.proposal}
                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                            required
                        />
                        <button type="submit">Update Proposal</button>
                    </form>
                </div>
            )}
        </section>
    );
};

export default PartnershipsTable;
