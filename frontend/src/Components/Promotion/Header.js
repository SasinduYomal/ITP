import React from 'react';

// Example image URL (replace this with your actual URL)
const headerImage = 'path/to/your/header-image.jpg';

// Example description text
const descriptionText = 'Here are the latest promotions and discounts available. Check them out below!';

const Header = () => {
    return (
        <header>
            <h1>Promotions and Discounts</h1>
            <div className="header-image">
                <img src={headerImage} alt="Promotions Header" />
            </div>
            <div className="description">
                <p>{descriptionText}</p>
            </div>
        </header>
    );
}

export default Header;

