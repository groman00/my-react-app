import React from 'react';
import ItemList from '../containers/ItemListContainer';
import AddItem from '../containers/AddItem';

const Home = () => (
    <div>
        <h2>Home</h2>
        <hr />
        <ItemList />
        <AddItem />
    </div>
);

export default Home;
