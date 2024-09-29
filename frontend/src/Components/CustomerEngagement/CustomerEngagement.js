import React, { useState } from 'react';
import MainImage from './MainImage';
import Description from './Description';
import PriceReview from './PriceReview';
import CustomerCategories from './CustomerCategories';
import CustomerFeedbackForm from './CustomerFeedbackForm';
import FeedbackList from './FeedbackList';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';


const CustomerEngagement = () => {
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

    const handleFeedbackSubmitted = () => {
        setFeedbackSubmitted(!feedbackSubmitted);
    };

    return (
        <div className="app-container">
            <Navbar />
            <MainImage />
            <Description />
            <PriceReview />
            <CustomerCategories />
            <CustomerFeedbackForm onFeedbackSubmitted={handleFeedbackSubmitted} />
            <FeedbackList />
            <Footer />
        </div>
    );
};

export default CustomerEngagement;
