import React, { Component } from 'react';
import ItemList from '../containers/ItemListContainer';
import AddItem from '../containers/AddItem';
import logo from '../../images/logo.svg';
import '../../css/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to My React App</h1>
                </header>
                <p className="App-intro">
                    To get started, foo edit <code>src/App.js</code> and save to reload.
                </p>
                <ItemList />
                <AddItem />
            </div>
        );
    }
}

export default App;
