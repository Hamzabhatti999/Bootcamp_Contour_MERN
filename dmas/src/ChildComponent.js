import React, { useRef, useContext } from 'react';
import ResultContext from './ResultContext';
import './ChildComponent.css'; // Import the CSS file for styling

const ChildComponent = () => {
    const addInput1Ref = useRef(null);
    const addInput2Ref = useRef(null);
    const subInput1Ref = useRef(null);
    const subInput2Ref = useRef(null);
    const mulInput1Ref = useRef(null);
    const mulInput2Ref = useRef(null);
    const divInput1Ref = useRef(null);
    const divInput2Ref = useRef(null);
    const { results, setResults } = useContext(ResultContext);

    const handleAddition = () => {
        const num1 = parseFloat(addInput1Ref.current.value);
        const num2 = parseFloat(addInput2Ref.current.value);
        const addition = num1 + num2;
        setResults({ ...results, addition });
    };

    const handleSubtraction = () => {
        const num1 = parseFloat(subInput1Ref.current.value);
        const num2 = parseFloat(subInput2Ref.current.value);
        const subtraction = num1 - num2;
        setResults({ ...results, subtraction });
    };

    const handleMultiplication = () => {
        const num1 = parseFloat(mulInput1Ref.current.value);
        const num2 = parseFloat(mulInput2Ref.current.value);
        const multiplication = num1 * num2;
        setResults({ ...results, multiplication });
    };

    const handleDivision = () => {
        const num1 = parseFloat(divInput1Ref.current.value);
        const num2 = parseFloat(divInput2Ref.current.value);
        const division = num1 / num2;
        setResults({ ...results, division });
    };

    return (
        <div className='dmas'>
            <div className="operation-container">
                <input ref={addInput1Ref} type="number" className="input-field" />
                <input ref={addInput2Ref} type="number" className="input-field" />
                <button onClick={handleAddition} className="operation-button">Add</button>
            </div>
            <div className="operation-container">
                <input ref={subInput1Ref} type="number" className="input-field" />
                <input ref={subInput2Ref} type="number" className="input-field" />
                <button onClick={handleSubtraction} className="operation-button">Subtract</button>
            </div>
            <div className="operation-container">
                <input ref={mulInput1Ref} type="number" className="input-field" />
                <input ref={mulInput2Ref} type="number" className="input-field" />
                <button onClick={handleMultiplication} className="operation-button">Multiply</button>
            </div>
            <div className="operation-container">
                <input ref={divInput1Ref} type="number" className="input-field" />
                <input ref={divInput2Ref} type="number" className="input-field" />
                <button onClick={handleDivision} className="operation-button">Divide</button>
            </div>
        </div>
    );
};

export default ChildComponent;
