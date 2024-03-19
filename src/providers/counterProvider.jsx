// counterContext.js
import React, { useState } from 'react';
import CounterContext from '../context/CounterContext';

export const CounterProvider = ({ children }) => {

    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    );
};

export default CounterContext; // Export default
