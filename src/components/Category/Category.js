import React from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const Category = (props) => {
    const { count, setCount } = props;
    return (
        <div>
            <h3>I am Category: {count}</h3>
            <CategoryDetail count={count} setCount={setCount}></CategoryDetail>
        </div>
    );
};

export default Category;