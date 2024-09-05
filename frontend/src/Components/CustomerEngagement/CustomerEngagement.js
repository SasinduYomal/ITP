import React from 'react';
import MainImage from './MainImage';
import Description from './Description';
import PriceReview from './PriceReview';
import CustomerCategories from './CustomerCategories';
import CustomerFeedbackForm from './CustomerFeedbackForm';

const CustomerEngagement = () => {
    return (
        <div>
            <MainImage />
            <Description />
            <PriceReview />
            <CustomerCategories />
            <CustomerFeedbackForm/>
        </div>
    );
}

export default CustomerEngagement;


