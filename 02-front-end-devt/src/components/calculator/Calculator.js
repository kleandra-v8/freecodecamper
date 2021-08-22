import React, { useState, useEffect, useRef } from 'react';
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

User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 * (-5)).

*/

function Calculator() {
    const [display, setDisplay] = useState('0');
    const [formula, setFormula] = useState('');
    const [newCalc, setNewCalc] = useState(false);
    const refEquals = useRef(null);

    const handleClear = () => {
        console.clear();

        setDisplay('0');
        setFormula('');

        refEquals.current.focus();
    };

    const handleInput = (newInput) => {
        console.log('Handle Input!');

        let newState = null,
            oldInput = display,
            oldFormula = formula;

        if (newCalc) {
            setNewCalc(false);
            console.log('New Calculation!');
            handleClear();
            oldInput = '0';
            oldFormula = '';
        }

        if (newInput === '0')
            newState = inputAZero(oldInput, newInput, oldFormula);
        else if (newInput === '.')
            newState = inputADecimal(oldInput, newInput, oldFormula);
        else if (isNumber(newInput))
            newState = inputANumber(oldInput, newInput, oldFormula);
        else if (isOperator(newInput))
            newState = inputAnOperator(oldInput, newInput, oldFormula);
        else console.log('Invalid Input!');

        // console.log('newState:', newState);

        if (newState) {
            setDisplay(() => newState.display);
            setFormula(() => newState.formula);
        }
    };

    const handleEquals = () => {
        console.log('handle Equals!');

        setNewCalc(true);

        const newState = inputAnOperator(display, '=', formula);

        if (newState) {
            const f = newState.formula;
            setFormula(f + ' =');

            const ans = '' + calculate(f);
            setDisplay(ans);
        }
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
                        ref={refEquals}
                    >
                        =
                    </button>
                    <button
                        id='clear'
                        onClick={handleClear}
                        className='calc-btn pink'
                    >
                        AC
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Calculator;
