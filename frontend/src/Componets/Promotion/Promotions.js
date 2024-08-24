import React from 'react';

const Promotions = () => {
    return (
        <section className="promotions">
            <h2>Current Promotions</h2>
            <div className="promotion">
                <h3>Summer Special: Free Installation</h3>
                <p>Get a free installation when you purchase any water purifier during the summer season. Offers valid till August 31.</p>
                <p><strong>Promo code:</strong> SUMMER2024</p>
            </div>
            <div className="promotion">
                <h3>Referral Program</h3>
                <p>Refer a friend and both of you will receive a $50 discount on your next purchase.</p>
                <p><strong>Promo code:</strong> 1234567</p>
            </div>
        </section>
    );
}

export default Promotions;
