import React, { useContext, createContext } from 'react';
import { categoryContext } from '../../App';

const CategoryDetails = (props) => {
    const { count, setCount } = props;

    const category = useContext(categoryContext);
    return (
        <div>
            <h3>I am Category Details: {count}</h3>
            <h5>Selected Category: {category}</h5>
        </div>
    );
};

export default CategoryDetails;