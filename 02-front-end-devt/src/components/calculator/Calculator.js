import React, { useState } from 'react';
import HomeButton from '../HomeButton';
import buttons from './buttons';
import { isNumber } from './helpers';

/**
    User Story #8: As I input numbers, I should be able to see my input in the element with the id of display.

    User Story #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros.
*/

function Calculator() {
    const [input, setInput] = useState('0');
    const [formula, setFormula] = useState(' ');

    const handleClear = () => {
        console.log(`Clearing display`);
        setInput('0');
        setFormula('');
    };

    const handleInput = (newInput) => {
        console.log(`handle Input:`, newInput);

        if (isNumber(newInput)) {
            if (input === '0') {
                setInput(newInput);
            } else if (isNumber(input)) {
                setInput((i) => i + newInput);
            } else {
                setInput(newInput);
            }
        } else {
            if (isNumber(input)) {
                setFormula((f) => f + input + newInput);
                setInput(newInput);
            } else {
                setFormula((f) => f + newInput);
                setInput(newInput);
            }
        }
    };

    return (
        <section className='the-calculator'>
            <HomeButton />

            <div className='screen'>
                <div id='formula' className='green'>
                    &nbsp; {formula}
                </div>
                <div id='display'>{input}</div>
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
