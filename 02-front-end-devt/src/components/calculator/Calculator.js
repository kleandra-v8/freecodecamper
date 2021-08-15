import React, { useState } from 'react';
import HomeButton from '../HomeButton';
import buttons from './buttons';
import {
    isNumber,
    isOperator,
    inputAZero,
    inputANumber,
    inputADecimal,
    inputAnOperator,
} from './helpers';

/**
 
User Story #11: When the decimal element is clicked, 
a . should append to the currently displayed value; 
two . in one number should not be accepted.

*/

function Calculator() {
    const [display, setDisplay] = useState('0');
    const [formula, setFormula] = useState('');

    const handleClear = () => {
        console.log(`Clearing display`);
        setDisplay('0');
        setFormula('');
    };

    const handleInput = (input) => {
        let newState;

        if (input === '0') newState = inputAZero(display, input, formula);
        else if (input === '.')
            newState = inputADecimal(display, input, formula);
        else if (isNumber(input))
            newState = inputANumber(display, input, formula);
        else if (isOperator(input))
            newState = inputAnOperator(display, input, formula);
        else console.log('Invalid Input!');

        console.log('newState:', newState);

        if (newState) {
            if (display !== newState.display)
                setDisplay(() => newState.display);
            if (formula !== newState.formula)
                setFormula(() => newState.formula);
        }
    };

    return (
        <section className='the-calculator'>
            <HomeButton />

            <div className='screen'>
                <div id='formula' className='green'>
                    &nbsp;{formula}
                </div>
                <div id='display'>{display}</div>
            </div>

            <div className='btn-box'>
                <div className='btn-grid'>
                    <button
                        id='clear'
                        onClick={handleClear}
                        className='calc-btn pink'
                    >
                        AC
                    </button>
                    {buttons.map((b) => (
                        <button
                            id={b.id}
                            onClick={() => handleInput(b.input)}
                            key={`calc-btn-${b.id}`}
                            className={`calc-btn ${b.color}`}
                        >
                            {b.display}
                        </button>
                    ))}
                    <button id='equals' className='calc-btn green'>
                        =
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Calculator;
