import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'; // Correct import
import CustomerEngagement from './Components/CustomerEngagement/CustomerEngagement';
import './App.css';
import Promo from './Components/Promotion/Promo';
import Partnership from './Components/Partnerships/Partnnership'
import DrinkingWater from './Components/Blog/DrinkingWater';
import BotteleWater from './Components/Blog/BottleWater'


function App() {
    return (
        <div className="App">
            <BotteleWater/>
           
        </div>
    );
}

export default App;


