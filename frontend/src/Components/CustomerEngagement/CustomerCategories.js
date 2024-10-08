import React from 'react';
import '../../App.css';
import residents from "../../assets/images/residents.png";
import business from "../../assets/images/business.jpeg";
import developers from "../../assets/images/developers.png";
import markt from "../../assets/images/markt.png";

const CustomerCategories = () => {
    return (
        <section className="categories-table">
            <h3>Customer categories</h3>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Definition</th>
                        <th>Sub-categories</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="category-icon">
                        <img src={residents} alt="Main" />
                            <p>Residents</p>
                        </td>
                        <td>Anyone that uses or consumes Sydney Water products or services.</td>
                        <td>
                            <ul>
                                <li>Owner occupier</li>
                                <li>Landlord</li>
                                <li>Tenant</li>
                                <li>General public</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="category-icon">
                        <img src={business} alt="Main" />
                            <p>Businesses</p>
                        </td>
                        <td>Any business that uses or consumes Sydney Water products or services.</td>
                        <td>
                            <ul>
                                <li>Service critical – high</li>
                                <li>Service critical – medium</li>
                                <li>Service critical – low</li>
                                <li>Service dependent</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="category-icon">
                        <img src={developers} alt="Main" />
                            <p>Developers</p>
                        </td>
                        <td>Any person or business that has both a financial interest and intention to augment land where residents/businesses will require Sydney Water services.</td>
                        <td>
                            <ul>
                                <li>Infrastructure and transport</li>
                                <li>Major developer</li>
                                <li>Professional developer</li>
                                <li>Novice developer</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="category-icon">
                        <img src={markt} alt="Main" />
                            <p>Value Makers</p>
                        </td>
                        <td>A business/person interacting with Sydney Water regarding products and services to create valuable things for residents, businesses, or developers.</td>
                        <td>
                            <ul>
                                <li>Doers</li>
                                <li>Facilitators</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default CustomerCategories;
