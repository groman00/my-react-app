import React from 'react';
import Item from './Item';

const ItemList = ({ items, loading }) => (
    <div className="grid gt-columns-4">
        {loading ? (
            <div>Loading</div>
        ) : (
            items.map((item, index) => (
                <Item key={index} {...item} />
            ))
        )}
    </div>
);

export default ItemList;
