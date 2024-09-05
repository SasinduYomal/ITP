import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'; // Correct import
import CustomerEngagement from './Components/CustomerEngagement/CustomerEngagement';
import './App.css';
import Promo from './Components/Promotion/Promo';
import Partnership from './Components/Partnerships/Partnnership'
import DrinkingWater from './Components/Blog/DrinkingWater';


function App() {
    return (
        <div className="App">
            <DrinkingWater/>
           
        </div>
    );
}

export default App;


