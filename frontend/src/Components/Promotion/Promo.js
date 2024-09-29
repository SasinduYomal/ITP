import React from 'react';
import Header from './Header';
import Promotions from './Promotions';
import Discounts from './Discounts';
import Gallery from './Gallery';
import ApplyCode from './ApplyCode';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';


function Promo() {
    return (
        <div>
            <Navbar/>
            <Header />
            <Promotions />
            <Discounts />
            <Gallery />
            <ApplyCode />
            <Footer/>
        </div>
    );
}

export default Promo;

