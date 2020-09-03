  
import React from 'react';
import Category from '../Category/Category';

const Home = (props) => {
    const {count, setCount} = props;
    return (
        <div>
            <h1>I am Home: {count}</h1>
            <Category count={count} setCount={setCount}></Category>
        </div>
    );
};

export default Home;