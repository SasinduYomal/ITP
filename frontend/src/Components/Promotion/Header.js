import React from 'react';
import promotions from "../../assets/images/promotions.jpg";

// Example image URL (replace this with your actual URL)
const headerImage = 'path/to/your/header-image.jpg';

// Example description text
const descriptionText = 'Here are the latest promotions and discounts available. Check them out below!';

const Header = () => {
    return (
        <header>
            <div className="header-image">
            <h1>Promotions and Discounts</h1>
            
                <img src={promotions} alt="Promotions Header" />
            </div>
            <div className="description">
                <p>{descriptionText}</p>
            </div>
        </header>
    );
}

export default Header;

