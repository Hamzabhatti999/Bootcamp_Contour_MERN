import React, { useContext } from 'react';
import ChildComponent from './ChildComponent';
import ResultContext from './ResultContext';
import './ChildComponent.css'; // Import the CSS file for styling
const ParentComponent = () => {
    const { division, multiplication, addition, subtraction } = useContext(ResultContext);

    return (
        <div className='dmas'>
            <h1>DMAS Results</h1>
            <p>Division: {division}</p>
            <p>Multiplication: {multiplication}</p>
            <p>Addition: {addition}</p>
            <p>Subtraction: {subtraction}</p>

            <ChildComponent />
        </div>
    );
};

export default ParentComponent;