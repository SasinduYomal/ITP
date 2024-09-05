import React, { useState } from 'react';

const ApplyCode = () => {
    const [discountCode, setDiscountCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle discount code application here
        alert(`Discount code ${discountCode} applied!`);
    }

    return (
        <section className="apply-code">
            <form onSubmit={handleSubmit}>
            <h2>Apply Discount Code</h2>
                <label htmlFor="discount-code">Enter Discount Code:</label><br />
                <input 
                    type="text" 
                    id="discount-code" 
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)} 
                /><br />
                <button type="submit">Apply Code</button>
            </form>
        </section>
    );
}

export default ApplyCode;
