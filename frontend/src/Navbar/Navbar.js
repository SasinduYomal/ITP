import React, { useState } from 'react';
import './Navbar.css';  // You will define styles here

const Navbar = () => {
    // State to toggle dropdown visibility
    const [dropdownVisible, setDropdownVisible] = useState(false);

    // Toggle dropdown visibility on hover
    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <span className="logo-text">BLUEWAVE</span>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>
            <ul className="nav-links">
                <li><a href="/">Products</a></li>
                <li><a href="/">Career</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Support</a></li>

                {/* Blog with Dropdown */}
                <li 
                    className="dropdown" 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                >
                    <a href="/">Blog</a>

                    {dropdownVisible && (
                        <ul className="dropdown-content">
                            <li><a href="/CustomerEngagement">Customer Engagement</a></li>
                            <li><a href="/partnerships">Partnership & Collaboration</a></li>
                        </ul>
                    )}
                </li>
            </ul>
            <button className="sign-in-btn">Sign In</button>
        </nav>
    );
};

export default Navbar;
