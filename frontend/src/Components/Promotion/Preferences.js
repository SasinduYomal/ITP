import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Preferences = ({ userId }) => {
    const [frequency, setFrequency] = useState('daily');
    const [receiveEmail, setReceiveEmail] = useState(true);
    const [receiveSMS, setReceiveSMS] = useState(true);
    const [receiveAppNotifications, setReceiveAppNotifications] = useState(true);

    // Fetch preferences on component mount
    useEffect(() => {
        axios.get(`/api/preferences/${userId}`)
            .then(response => {
                const { receiveEmail, receiveSMS, receiveAppNotifications, frequency } = response.data;
                setReceiveEmail(receiveEmail);
                setReceiveSMS(receiveSMS);
                setReceiveAppNotifications(receiveAppNotifications);
                setFrequency(frequency);
            })
            .catch(err => {
                console.error('Error fetching preferences:', err);
            });
    }, [userId]);

    const handleFrequencyChange = (e) => {
        setFrequency(e.target.value);
    };

    const handleEmailChange = (e) => {
        setReceiveEmail(e.target.checked);
    };

    const handleSMSChange = (e) => {
        setReceiveSMS(e.target.checked);
    };

    const handleAppNotificationsChange = (e) => {
        setReceiveAppNotifications(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const preferencesData = {
            receiveEmail,
            receiveSMS,
            receiveAppNotifications,
            frequency,
        };
        axios.post(`/api/preferences/${userId}`, preferencesData)
            .then(response => {
                console.log('Preferences updated successfully:', response.data);
            })
            .catch(err => {
                console.error('Error updating preferences:', err);
            });
    };

    return (
        <div className="preferences-container">
            <h2>Update Promotion Preferences</h2>
            <form onSubmit={handleSubmit}>
                <div className="checkbox-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={receiveEmail}
                            onChange={handleEmailChange}
                        />
                        Receive promotional emails
                    </label>
                </div>
                <div className="checkbox-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={receiveSMS}
                            onChange={handleSMSChange}
                        />
                        Receive SMS notifications
                    </label>
                </div>
                <div className="checkbox-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={receiveAppNotifications}
                            onChange={handleAppNotificationsChange}
                        />
                        Receive app notifications
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="frequency">Preferred frequency:</label>
                    <select
                        id="frequency"
                        value={frequency}
                        onChange={handleFrequencyChange}
                    >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>
                <button type="submit" className="btn">Update Preferences</button>
            </form>
        </div>
    );
};

export default Preferences;


