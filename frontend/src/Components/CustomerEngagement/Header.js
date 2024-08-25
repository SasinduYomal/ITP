import React from 'react';
import '../../App.css';
import {Link} from "react-router-dom";



const Header = () => {
    return (
        <header>
            <div className="logo">BLUE WAVE</div>
            <nav>
                <input type="text" placeholder="Search..." id="search-bar" />
                <button>Search</button>
                <a href="#">Product</a>
                <a href="#">Careers</a>
                <a href="#">About Us</a>
                <a href="#">Support</a>
                <a href="#">Blog</a>
            </nav>
            
            <div className="header-sections">
            <nav>
                
                <h2><a href='#'>Customer Engagement</a></h2>
                <Link to="/Promo">
                <h2><a href='#'>Promotions and Discounts</a></h2>
                </Link>
                <h2><a href='#'>Partnerships and Collaborations</a></h2>
                <h2><a href='#'>Digital Marketing</a></h2>
                </nav>    
            </div>
            
        </header>
    );
}

export default Header;

