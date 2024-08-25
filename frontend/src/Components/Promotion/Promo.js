import React from 'react';
import Header from './Header';
import Promotions from './Promotions';
import Discounts from './Discounts';
import Gallery from './Gallery';
import Preferences from './Preferences';
import ApplyCode from './ApplyCode';



function Promo() {
    return (
        <div>
            <Header />
            <Promotions />
            <Discounts />
            <Gallery />
            <Preferences />
            <ApplyCode />
        </div>
    );
}

export default Promo;

