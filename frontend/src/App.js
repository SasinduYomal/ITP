import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'; // Correct import
import CustomerEngagement from './Components/CustomerEngagement/CustomerEngagement';
import './App.css';
import Promo from './Components/Promotion/Promo';
import Partnership from './Components/Partnerships/Partnnership'
import DrinkingWater from './Components/Blog/DrinkingWater';
import BotteleWater from './Components/Blog/BottleWater'
import Blog from './Components/Blog/Blog';
import CustomerFeedbackList from './Components/Admin/CustomerFeedbackList'
import CustomerCategories from './Components/CustomerEngagement/CustomerCategories';
import CustomerFeedbackForm from './Components/CustomerEngagement/CustomerFeedbackForm';


function App() {
    return (
        <div className="App">
            < CustomerFeedbackList/>
           
        </div>
    );
}

export default App;


