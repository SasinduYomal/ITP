import React from 'react';
import '../../App.css';


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
        </header>
    );
};

export default Header;
