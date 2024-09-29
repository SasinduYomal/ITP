import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'; // Correct import
import CustomerEngagement from './Components/CustomerEngagement/CustomerEngagement';
import './App.css';
import Promo from './Components/Promotion/Promo';
import Partnership from './Components/Partnerships/Partnnership'
import PartnershipsForm from './Components/Partnerships/PartnershipsForm'
import DrinkingWater from './Components/Blog/DrinkingWater';
import BotteleWater from './Components/Blog/BottleWater'
import Blog from './Components/Blog/Blog';
import CustomerFeedbackList from './Components/Admin/CustomerFeedbackList'
import CustomerCategories from './Components/CustomerEngagement/CustomerCategories';
import CustomerFeedbackForm from './Components/CustomerEngagement/CustomerFeedbackForm';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import FeedbackList from './Components/CustomerEngagement/FeedbackList';
import Promotions from './Components/Admin/Promotions';
import Admin from './Components/Admin/Admin';
import PartnershipTableList from './Components/Admin/PartnershipTableList'
import PartnershipTable from './Components/Partnerships/PartnershipsTable'


function App() {
    return (
        <div className="App">
        <Partnership/>
        </div>
    );
}

export default App;


