import './Calculator.css';

const Calculator = (props) => {
    return <div className='calculator'>
        <input type="number" className='calculator-input'/>
        <input type="number" className='calculator-input'/>
        <button>Calculate</button>
    </div>
}

export default Calculator;