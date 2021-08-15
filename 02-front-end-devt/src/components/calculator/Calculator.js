import React, { useState, useEffect } from 'react';
import HomeButton from '../HomeButton';
import buttons from './buttons';
import {
    isNumber,
    isOperator,
    inputAZero,
    inputANumber,
    inputADecimal,
    inputAnOperator,
    calculate,
    keyboardEventHandler,
} from './helpers';

/**
 
User Story #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.

User Story #12: I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.

User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 * (-5)).

*/

function Calculator() {
    const [display, setDisplay] = useState('0');
    const [formula, setFormula] = useState('');

    const handleClear = () => {
        console.log(`Clearing display`);
        setDisplay('0');
        setFormula('');
    };

    const handleInput = async (input) => {
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
                await setDisplay(() => newState.display);
            if (formula !== newState.formula)
                await setFormula(() => newState.formula);
        }
    };

    const handleEquals = async () => {
        await handleInput('=');
        calculate(formula);
    };

    useEffect(() => {
        window.addEventListener('keydown', keyboardEventHandler);
        return () => {
            window.removeEventListener('keydown', keyboardEventHandler);
        };
    }, []);

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
                    <button
                        id='equals'
                        onClick={handleEquals}
                        className='calc-btn pink'
                    >
                        =
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Calculator;
