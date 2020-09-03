import React, { useState, createContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';
import Home from './components/Home/Home';

export const categoryContext = createContext(); 

function App() {

  const [ count, setCount ] = useState(0);

  return (
    <categoryContext.Provider value={count}>
      <h3>Count: {count}</h3>
      <Header count={count} setCount={setCount}></Header>
      <Home count={count} setCount={setCount}></Home>
      <Shipment></Shipment>
    </categoryContext.Provider>
  );
}


export default App;
