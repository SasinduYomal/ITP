import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PartnershipsTable = () => {
    const [proposals, setProposals] = useState([]); // Ensure it's initialized as an empty array
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyName: '',
        website: '',
        proposal: ''
    });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchProposals();
    }, []);

    const fetchProposals = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/proposals');
            setProposals(response.data);
        } catch (err) {
            console.error(err);
            alert('Error fetching proposals.');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/proposals/${id}`);
            alert('Proposal deleted successfully.');
            fetchProposals();
        } catch (err) {
            console.error(err);
            alert('Error deleting proposal.');
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
                                <td>
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
                            <td colSpan="6">No proposals found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    );
};

export default PartnershipsTable;
