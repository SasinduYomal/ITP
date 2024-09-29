import React from 'react';
import CustomerFeedbackList from '../Admin/CustomerFeedbackList';
import Discount from '../Admin/Discounts';
import Promotions from '../Admin/Promotions'
import PartnershipsTableList from '../Admin/PartnershipTableList';



function Admin() {
    return (
        <div className="App">
        <CustomerFeedbackList/>
        <PartnershipsTableList/>
        <Discount/>
        <Promotions/>
        </div>
    );
}


export default Admin;
