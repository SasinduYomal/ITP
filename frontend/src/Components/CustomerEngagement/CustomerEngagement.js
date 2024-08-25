import React from 'react';
import Header from './Header';
import MainImage from './MainImage';
import Description from './Description';
import PriceReview from './PriceReview';
import CustomerCategories from './CustomerCategories';
import CustomerFeedback from './CustomerFeedback';

const CustomerEngagement = () => {
    return (
        <div>
            <Header />
            <MainImage />
            <Description />
            <PriceReview />
            <CustomerCategories />
            <CustomerFeedback />
        </div>
    );
}

export default CustomerEngagement;


