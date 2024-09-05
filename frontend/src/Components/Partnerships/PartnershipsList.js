import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../App.css";

const PartnershipsList = () => {
    const [partnership, setPartnership] = useState([]);

    useEffect(() => {
        const fetchPartnership = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/partnership');
                setPartnership(res.data);
            } catch (err) {
                console.error('Error fetching partnership:', err);
            }
        };

        fetchPartnership();
    }, []);

    return (
        <div className="partnership-list">
            <h2>Submitted Partnership</h2>
            {partnership.length === 0 ? (
                <p>No proposals submitted yet.</p>
            ) : (
                <ul>
                    {partnership.map((proposal) => (
                        <li key={partnership._id} className="partnership-item">
                            <h3>{partnership.companyName}</h3>
                            <p><strong>Contact:</strong> {partnership.name} ({partnership.email})</p>
                            <p><strong>Website:</strong> <a href={partnership.website}>{partnership.website}</a></p>
                            <p><strong>Proposal:</strong> {partnership.proposal}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PartnershipsList;

