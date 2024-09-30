import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './admin.css'; // Link the CSS file
import PartnershipTableList from '../Admin/PartnershipTableList'
import Promotion from '../Admin/Promotions'
import Discounts from '../Admin/Discounts'
import Feedback from '../Admin/FeedbackList';


function Admin() {

    return (
        <div className="App">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/CustomerFeedbackList">Customer Engagement</Link></li>
                    <li><Link to="/PartnershipTableList">Partnership & Collaboration</Link></li>
                    <li><Link to="/Promotion">Promotion & Discount</Link></li>
                </ul>
            </nav>
            <PartnershipTableList/>
            <Feedback/>
            <Promotion/>
            <Discounts/>
        </div>
    );
}

export default Admin;
