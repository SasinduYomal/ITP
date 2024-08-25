import React from 'react';

const Discounts = () => {
    return (
        <section className="discounts">
            <h2>Available Discounts</h2>
            <div className="discount">
                <p>10% off on All Purifiers</p>
                <p>Enjoy a 10% discount on all water purifiers. Use code: 1234 at checkout. Valid till September 15.</p>
            </div>
            <div className="discount">
                <p>Bundle Offer: Purifier + 1-year service</p>
                <p>Purchase a water purifier and 1-year service plan together to save 15% on the total price. Valid till September 31.</p>
                <p><strong>Promo code:</strong> BUNDLE15</p>
            </div>
        </section>
    );
}

export default Discounts;
