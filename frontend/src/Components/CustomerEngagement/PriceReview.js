import React from 'react';
import '../../App.css';


const PriceReview = () => {
    return (
        <section class="price-review">
        <h2>What is a price review?</h2>
        <div class="review-factors">
            <div class="factor">
                <div class="factor-header">
                    <h3>BLUEWAVE WATER</h3>
                </div>
                <p>A price review is part of Bluewave Water’s cyclical regulatory requirement to IPART. Every five years we develop a price proposal for submission that reflects the efficient cost of providing our services. The priorities and expectations of our customer and community are at the foundation of our price proposal through community engagement.</p>
            </div>
            <div class="factor">
                <div class="factor-header">
                    <h3>IPART</h3>
                </div>
                <p>IPART sets the framework for the price review and makes a pricing determination every five years for the maximum price for drinking water and wastewater services that Sydney Water provides. IPART’s final decision reflects the efficient cost of providing our services with the priorities and expectations of our customers and community at the foundation.</p>
            </div>
            <div class="factor">
                <div class="factor-header">
                    <h3>CUSTOMERS AND COMMUNITY</h3>
                </div>
                <p>As end users of our services including drinking water, wastewater, and stormwater, our customers and the community engage with us to ensure their priorities and expectations are reflected in the pricing proposal. This means we’re all on the same page.</p>
            </div>
        </div>
    </section>
    );
};

export default PriceReview;
