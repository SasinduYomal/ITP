import React from 'react';
import './Footer.css'; // External CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h2>BlueWave</h2>
                    <p>Delivering pure and refreshing water right to your doorsteps.</p>
                </div>
                <div className="footer-middle">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Delivery</a></li>
                        <li><a href="/">Extraction</a></li>
                        <li><a href="/">Recent Posts</a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <h3>Contact Us</h3>
                    <p>123 Main Street, Gamunupura, Malabe, Sri Lanka</p>
                    <p>Email: contact@bluewave.com</p>
                    <p>Phone: +94 770584223</p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="social-icons">
                    <a href="/">Facebook</a>
                    <a href="/">Twitter</a>
                    <a href="/">Instagram</a>
                    <a href="/">LinkedIn</a>
                </div>
                <p>© 2024 BlueWave. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
