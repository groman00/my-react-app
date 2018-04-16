import React from 'react';
import ItemList from '../containers/ItemListContainer';
import AddItem from '../containers/AddItem';

const Home = () => (
    <div>
        <h2>Home</h2>
        <hr />
        <AddItem />
        <ItemList />
    </div>
);

export default Home;
