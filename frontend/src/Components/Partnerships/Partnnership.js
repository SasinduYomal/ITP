import React from 'react';
import PartnershipHeader from './PartnershipHeader';
import PartnershipsForm from './PartnershipsForm';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const Partnership = () => {  // Corrected from "Parnership" to "Partnership"
    return (
        <div>
            <Navbar/>
            <PartnershipHeader/>
            <PartnershipsForm/>
            
            <Footer/>
        </div>
    );
}

export default Partnership;  // Corrected from "Parnership" to "Partnership"
