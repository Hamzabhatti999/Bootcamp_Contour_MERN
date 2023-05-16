import React, { createContext, useState } from 'react';

const ResultContext = createContext();

const ResultProvider = ({ children }) => {
    const [results, setResults] = useState({
        division: 0,
        multiplication: 0,
        addition: 0,
        subtraction: 0
    });

    return (
        <ResultContext.Provider value={{ ...results, setResults }}>
            {children}
        </ResultContext.Provider>
    );
};

export { ResultProvider };
export default ResultContext;