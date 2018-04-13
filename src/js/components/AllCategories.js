import React from 'react';
import { Link } from 'react-router-dom';

const AllCategories = () => (
    <div>
        All Categories
        <ul>
            <li><Link to="/category/finance">Finance</Link></li>
            <li><Link to="/category/sports">Sports</Link></li>
            <li><Link to="/category/politics">Politics</Link></li>
        </ul>
    </div>
);

export default AllCategories;
