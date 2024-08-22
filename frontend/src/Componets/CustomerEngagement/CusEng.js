import React from 'react';
import '../../App.css';

// MainImage Component
export const MainImage = () => {
    return (
        <section className="main-image">
            <img src="main-image.jpg" alt="Main" />
            <p>What's driving our customer engagement now?</p>
        </section>
    );
};

// Description Component
export const Description = () => {
    return (
        <section className="description">
            <p>
                The three major factors that require us to change include growing cities,
                climate change, and customer expectations.
            </p>
            <div className="description-details">
                <div className="description-item">
                    <img src="growing-cities.jpg" alt="Growing Cities" />
                    <p>Growing Cities</p>
                </div>
                <div className="description-item">
                    <img src="climate-change.jpg" alt="Climate Change" />
                    <p>Climate Change</p>
                </div>
                <div className="description-item">
                    <img src="customer-expectations.jpg" alt="Customer Expectations" />
                    <p>Customer Expectations</p>
                </div>
            </div>
        </section>
    );
};

// PriceReview Component
export const PriceReview = () => {
    return (
        <section className="price-review">
            <h2>What is a price review?</h2>
            <div className="price-review-details">
                <div className="price-review-item">
                    <h3>BLUEWAVE Water</h3>
                    <p>Description about BLUEWAVE Water price review.</p>
                </div>
                <div className="price-review-item">
                    <h3>IPART</h3>
                    <p>Description about IPART price review.</p>
                </div>
                <div className="price-review-item">
                    <h3>Customer Community</h3>
                    <p>Description about Customer Community price review.</p>
                </div>
            </div>
        </section>
    );
};

// CustomerCategories Component
export const CustomerCategories = () => {
    return (
        <section className="customer-categories">
            <h2>Customer Categories</h2>
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
                        <td>Residents</td>
                        <td>Anyone that uses or consumes BLUEWAVE water product or services</td>
                        <td>
                            <ul>
                                <li>Owner Occupier</li>
                                <li>Landlord</li>
                                <li>Tenant</li>
                                <li>General Public</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Businesses</td>
                        <td>Any business that uses or consumes BLUEWAVE water services</td>
                        <td>
                            <ul>
                                <li>Service Critical - High</li>
                                <li>Service Critical - Medium</li>
                                <li>Service Critical - Low</li>
                                <li>Service Dependent</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

// CustomerFeedback Component
export const CustomerFeedback = () => {
    return (
        <section className="customer-feedback">
            <h2>Customer Feedback</h2>
            <form>
                <label>Name:</label>
                <input type="text" name="name" />
                <label>Email:</label>
                <input type="email" name="email" />
                <label>Rating:</label>
                <select name="rating">
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                </select>
                <label>Comments:</label>
                <textarea name="comments"></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};
