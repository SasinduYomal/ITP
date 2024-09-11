import React, { useEffect, useState } from 'react';
import axios from 'axios';



const CustomerFeedbackList = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/feedback');
                setFeedbacks(res.data);  // Set the data from the API response
            } catch (err) {
                console.error(err);
                setError('Error fetching feedback data');
            }
        };

        fetchFeedbacks();
    }, []);

    return (
        <div>
            <h2>Customer Feedback</h2>
            {error && <p>{error}</p>} {/* Display error if there's any */}
            {feedbacks.length > 0 ? ( // Check if feedbacks array has data
                <ul>
                    {feedbacks.map((feedback) => (
                        <li key={feedback._id}>
                            <h3>{feedback.name}</h3>
                            <p>Email: {feedback.email}</p>
                            <p>Rating: {feedback.rating}</p>
                            <p>Feedback: {feedback.feedback}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No feedback available</p>
            )}
        </div>
    );
};

export default CustomerFeedbackList;

