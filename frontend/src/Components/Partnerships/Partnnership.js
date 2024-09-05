import React from 'react';
import PartnershipHeader from './PartnershipHeader';
import PartnershipsForm from './PartnershipsForm';
import PartnershipsList from './PartnershipsList';

const Partnership = () => {  // Corrected from "Parnership" to "Partnership"
    return (
        <div>
            <PartnershipHeader/>
            <PartnershipsForm/>
            <PartnershipsList/>
        </div>
    );
}

export default Partnership;  // Corrected from "Parnership" to "Partnership"
