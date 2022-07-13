import { useState } from 'react';
import './Calculator.css';

const Calculator = (props) => {
    // Track the first and second number in local state
    const [firstNum, setFirstNum] = useState('0');
    const [secondNum, setSecondNum] = useState('0');
    const [operand, setOperand] = useState('+');

    const [firstNumber, setFirstNumber] = useState('')
    const [secondNumber, setSecondNumber] = useState('')
    const [newOperand, setNewOperand] = useState('');
    const [onSecondInput, setOnSecondInput] = useState(false);
    const [result, setResult] = useState('');

    const calculate = (first, second, op) => {
        // Unfinished function for actually calculating the stuff

        const f = parseInt(first);
        const s = parseInt(second);

        switch(op){
            case '+':
                return f + s;
            case '-':
                return f - s;
            case '/':
                return f / s;
            case '*':
                return f * s;
            default:
                return;
        }
    }

    const handleKeypadClick = (e) => {
        const newNum = e.target.value;
        let number;
        let setter;

        if(onSecondInput){
            number = secondNumber;
            setter = setSecondNumber;
        }else{
            number = firstNumber;
            setter = setFirstNumber;
        }

        if(number.length === 0 && e.target.value === "0") return;
        setter(number + newNum);
    }

    const handleOperandClick = (e) => {
        const op = e.target.value;
        setNewOperand(op);

        if(firstNumber.length === 0) return;
        if(!onSecondInput) setOnSecondInput(true);
    }

    const answer = () => {
        if(firstNumber && secondNumber){
            setResult(calculate(firstNumber, secondNumber, newOperand));
            console.log(result);
        }
    }

    console.log(firstNumber, newOperand, secondNumber, result);

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


    <div>
        {firstNumber} {newOperand} {secondNumber} = {result}
    </div>

    <div>
        <div>
            <button value="1" onClick={handleKeypadClick}>1</button>
            <button value="2" onClick={handleKeypadClick}>2</button>
            <button value="3" onClick={handleKeypadClick}>3</button>
        </div>
        <div>
            <button value="4" onClick={handleKeypadClick}>4</button>
            <button value="5" onClick={handleKeypadClick}>5</button>
            <button value="6" onClick={handleKeypadClick}>6</button>
        </div>
        <div>
            <button value="7" onClick={handleKeypadClick}>7</button>
            <button value="8" onClick={handleKeypadClick}>8</button>
            <button value="9" onClick={handleKeypadClick}>9</button>
        </div>
        <div><button value="0" onClick={handleKeypadClick}>0</button></div>
        <div>
            <button value="+" onClick={handleOperandClick}>+</button>
            <button value="-" onClick={handleOperandClick}>-</button>
            <button value="*" onClick={handleOperandClick}>*</button>
            <button value="/" onClick={handleOperandClick}>/</button>
        </div>
        <div>
            <button onClick={answer}>=</button>
        </div>
    </div>

    </div>
}

export default Calculator;