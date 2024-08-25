import React, { useState } from 'react';

const Preferences = () => {
    const [frequency, setFrequency] = useState('daily');
    const [receiveEmail, setReceiveEmail] = useState(true);
    const [receiveSMS, setReceiveSMS] = useState(true);
    const [receiveAppNotifications, setReceiveAppNotifications] = useState(true);

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
        // Handle the preferences update here
        console.log('Preferences updated:', { receiveEmail, receiveSMS, receiveAppNotifications, frequency });
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

