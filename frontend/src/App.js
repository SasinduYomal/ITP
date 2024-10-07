import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'; // Correct import
import './App.css';
import CustomerEngagement from './Components/CustomerEngagement/CustomerEngagement';
import Partnership from './Components/Partnerships/Partnnership'
import PartnershipsForm from './Components/Partnerships/PartnershipsForm'
import DrinkingWater from './Components/Blog/DrinkingWater';
import BotteleWater from './Components/Blog/BottleWater'
import Blog from './Components/Blog/Blog';
import CustomerCategories from './Components/CustomerEngagement/CustomerCategories';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Admin from './Components/Admin/Admin';
import PartnershipTableList from './Components/Admin/PartnershipTableList'
import PartnershipTable from './Components/Partnerships/PartnershipsTable'
import CustomerFeedbackForm from './Components/CustomerEngagement/CustomerFeedbackForm'
import FeedbackList from './Components/Admin/FeedbackList';

function App() {
  return (
    <div>
      <Admin />
    </div>
  );
}

export default App;



