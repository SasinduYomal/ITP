import React, { useState } from 'react';

const Preferences = () => {
    const [frequency, setFrequency] = useState('daily');
    const [receiveEmail, setReceiveEmail] = useState(true);
    const [receiveSMS, setReceiveSMS] = useState(true);

    const handleFrequencyChange = (e) => {
        setFrequency(e.target.value);
    }

    const handleEmailChange = (e) => {
        setReceiveEmail(e.target.checked);
    }

    const handleSMSChange = (e) => {
        setReceiveSMS(e.target.checked);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the preferences update here
        console.log('Preferences updated:', { receiveEmail, receiveSMS, frequency });
    }

    return (
        <section className="preferences">
            <h2>Update Promotion Preferences</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="checkbox"
                        checked={receiveEmail}
                        onChange={handleEmailChange}
                    />
                    Receive promotional email
                </label><br />
                <label>
                    <input
                        type="checkbox"
                        checked={receiveSMS}
                        onChange={handleSMSChange}
                    />
                    Receive SMS Notifications
                </label><br />
                <label>
                    Preferred frequency:
                    <select value={frequency} onChange={handleFrequencyChange}>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </label><br />
                <button type="submit">Update Preference</button>
            </form>
        </section>
    );
}

export default Preferences;

