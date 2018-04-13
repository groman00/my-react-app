import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllCategories from '../components/AllCategories';
import Category from '../components/Category';

const Categories = () => (
    <Switch>
        <Route exact path='/category' component={AllCategories}/>
        <Route path='/category/:categoryName' component={Category}/>
    </Switch>
);

export default Categories;
