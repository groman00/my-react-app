import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { route } from '../lib/routes';
import AllCategories from '../components/AllCategories';
import Category from '../components/Category';
import NotFound from '../pages/NotFound';

const Categories = () => (
    <Switch>
        <Route exact path={route('categories')} component={AllCategories}/>
        <Route path={route('category', { category: ':categoryName(finance|sports|politics)' })} component={Category}/>
        <Route component={NotFound}/>
    </Switch>
);

export default Categories;
