import React from 'react';
import {Link} from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h1>My Work</h1>
        <p>Checkout the stuff I've done:</p>
        <ul className="portfolio-list">
            <li><Link to="/portfolio/1">Item One</Link></li>
            <li><Link to="/portfolio/2">Item Two</Link></li>
        </ul>
    </div>
);

export default PortfolioPage;