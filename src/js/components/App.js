import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { route } from '../lib/routes';
import Header from './Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Categories from '../pages/Categories';
import NotFound from '../pages/NotFound';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route exact path={route('home')} component={Home}/>
                        <Route path={route('about')} component={About}/>
                        <Route path={route('categories')} component={Categories}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
