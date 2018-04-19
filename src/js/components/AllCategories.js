import React from 'react';
import { Link } from 'react-router-dom';
import { route } from '../lib/routes';

const AllCategories = () => (
    <div>
        All Categories
        <ul>
            <li><Link to={route('category', { category: 'finance' })}>Finance</Link></li>
            <li><Link to={route('category', { category: 'sports' })}>Sports</Link></li>
            <li><Link to={route('category', { category: 'politics' })}>Politics</Link></li>
        </ul>
    </div>
);

export default AllCategories;
