import React, { useState } from 'react';
import HomeButton from '../HomeButton';
import buttons from './buttons';

/**
    User Story #7: At any time, pressing the clear button clears the input and output values, 
    and returns the calculator to its initialized state; 
    0 should be shown in the element with the id of display.
*/

function Calculator() {
    const [input, setInput] = useState('12345.06789');
    const [formula, setFormula] = useState('12 / 345.06 + 78 * 9');

    const handleClear = () => {
        console.log(`Clearing display`);
        setInput('0');
        setFormula(' ');
    };

    return (
        <section className='the-calculator'>
            <HomeButton />

            <div className='screen'>
                <div id='formula' className='green'>
                    {formula}
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
