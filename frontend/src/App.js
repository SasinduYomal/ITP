import React from 'react';
import Header from "./Componets/CustomerEngagement/Header";
import MainImage from "./Componets/CustomerEngagement/MainImage";
import Description from "./Componets/CustomerEngagement/Description";
import PriceReview from "./Componets/CustomerEngagement/PriceReview";
import CustomerCategories from "./Componets/CustomerEngagement/CustomerCategories";
import CustomerFeedback from "./Componets/CustomerEngagement/CustomerFeedback";

function App() {
    return (
        <div className="App">
            <Header />
            <MainImage />
            <Description />
            <PriceReview />
            <CustomerCategories />
            <CustomerFeedback />
        </div>
    );
}

export default App;

