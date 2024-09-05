import React from 'react';
import Header from './Header';
import MainImage from './MainImage';
import Description from './Description';
import PriceReview from './PriceReview';
import CustomerCategories from './CustomerCategories';
import CustomerFeedbackForm from './CustomerFeedbackForm';

const CustomerEngagement = () => {
    return (
        <div>
            <Header />
            <MainImage />
            <Description />
            <PriceReview />
            <CustomerCategories />
            <CustomerFeedbackForm/>
        </div>
    );
}

export default CustomerEngagement;


