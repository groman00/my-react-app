import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => (
    <div className="grid gt-columns-4">
        {items.map((item, index) => (
            <Item key={index} {...item} />
        ))}
    </div>
);

export default ItemList;
