import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import './Header.scss';

const Header = () => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to My React App</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/category">Categories</Link></li>
        </ul>
    </header>
);

export default Header;
