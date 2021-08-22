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
import BackspaceIcon from '@material-ui/icons/Backspace';

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
            handleClear();

            console.log('New Calculation!');

            oldInput = isOperator(newInput) ? display : '0';
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
            console.log('Answer:', ans);
            setDisplay(ans);
        }
    };

    const handleBackspace = () => {
        if (display.length && display !== '0') {
            setDisplay((state) => {
                let d = state.slice(0, -1);
                return d ? d : '0';
            });
        } else if (formula.length) {
            setFormula((state) =>
                state.trim().split(' ').slice(0, -1).join(' ')
            );
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
                    <button
                        id='clear'
                        onClick={handleClear}
                        className='calc-btn pink'
                    >
                        AC
                    </button>
                    <button
                        id='backspace'
                        onClick={handleBackspace}
                        className='calc-btn pink'
                    >
                        <BackspaceIcon />
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
                        className='calc-btn green'
                        ref={refEquals}
                    >
                        =
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Calculator;
