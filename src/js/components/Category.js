import React from 'react';

const Category = (props) => {
    const name = props.match.params.categoryName;
    return (
        <div>
            Category: {name}
        </div>
    );
};

export default Category;
