import React from 'react';
import partnership from "../../assets/images/partnership.jpg"; // Image import path
import "../../App.css";


const PartnershipHeader = () => {
    return (
        <section className="main-image">
            <div className="home-container">
                <h2>Welcome to Partnerships and Collaboration</h2>
                <img src={partnership} alt="Main" />
                <p>
                    At Water Supply Companies, we believe in the power of partnerships. Our collaborations with industry leaders, innovative startups, and community organizations help us drive sustainable water management solutions. Watch the video below to learn more about our collaborative efforts.
                </p>
            </div>
        </section>
    );
};

export default PartnershipHeader;
