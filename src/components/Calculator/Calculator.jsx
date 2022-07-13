import { useState } from 'react';
import './Calculator.css';

const Calculator = (props) => {
    // Track the first and second number in local state
    const [firstNum, setFirstNum] = useState('0');
    const [secondNum, setSecondNum] = useState('0');
    const [operand, setOperand] = useState('+');

    const calculate = () => {
        // Unfinished function for actually calculating the stuff
    }

    return <div className='calculator'>
        {/* First Controlled Input */}
        <input
            type="number"
            className='calculator-input'
            value={firstNum}
            onChange={(e) => setFirstNum(e.target.value)}
        />

        {/* Get operand with controlled <select> Element */}
        <select
            value={operand}
            onChange={(e) => setOperand(e.target.value)}
        >
            <option>+</option>
            <option>-</option>
        </select>

        {/* Second Controlled Input */}
        <input
            type="number"
            className='calculator-input'
            value={secondNum}
            onChange={(e) => setSecondNum(e.target.value)}
        />
        <button onClick={calculate}>Calculate</button>

    </div>
}

export default Calculator;