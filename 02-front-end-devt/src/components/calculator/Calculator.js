import React from 'react';
import HomeButton from '../HomeButton';
import buttons from './buttons';

function Calculator() {
    return (
        <section className='the-calculator'>
            <HomeButton />

            <div className='screen'>
                <div id='formula' className='green'>
                    12 / 345.06 + 78 * 9 + 12
                    {/* / 345.06 + 78 * 9 + 12 / 345.06 +
                    78 * 9 + 12 / 345.06 + 78 * 9 + 12 / 345.06 + 78 * 9 + 12 */}
                </div>
                <div id='display'>12345.06789</div>
            </div>

            <div className='btn-box'>
                <div className='btn-grid'>
                    <button id='clear' className='calc-btn pink'>
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
