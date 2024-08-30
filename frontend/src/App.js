import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'; // Correct import
import CustomerEngagement from './Components/CustomerEngagement/CustomerEngagement';
import './App.css';
import Promo from './Components/Promotion/Promo';


function App() {
    return (
        <div className="App">
            <CustomerEngagement/>
           
        </div>
    );
}

export default App;


