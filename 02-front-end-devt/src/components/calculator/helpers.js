import buttons from './buttons';
import { multiply, divide, add, subtract, toNumber } from 'lodash';

const OPERATIONS = [
    { char: '*', fn: multiply },
    { char: '/', fn: divide },
    { char: '+', fn: add },
    { char: '-', fn: subtract },
];

export const isNumber = (str) => /\d+([.]?\d*)/.test(str);

export const isOperator = (str) => /[/*\-+=]+$/.test(str);

export const hasDecimal = (str) => /[.]/.test(str);

export const inputAZero = (o, n, f) => {
    // console.log(
    //     `inputAZero  |  Old: ${o}  |  Current: ${n}  |  Formula: ${f}  `
    // );
    if (o === '0') {
        return null;
    }
    if (isNumber(o)) {
        return {
            display: o + n,
            formula: f,
        };
    }
    if (isOperator(o)) {
        return {
            display: n,
            formula: f + ' ' + o.slice(-1),
        };
    }

    return null;
};

export const inputADecimal = (o, n, f) => {
    // console.log(
    //     `inputADecimal  |  Old: ${o}  |  Current: ${n}  |  Formula: ${f}  `
    // );

    if (hasDecimal(o)) {
        return null;
    }
    if (isNumber(o)) {
        return {
            display: o + n,
            formula: f,
        };
    }
    if (isOperator(o)) {
        return {
            display: '0' + n,
            formula: f + ' ' + o.slice(-1),
        };
    }

    return null;
};

export const inputANumber = (o, n, f) => {
    // console.log(
    //     `inputANumber  |  Old: ${o}  |  Current: ${n}  |  Formula: ${f}  `
    // );

    if (o === '0') {
        return {
            display: n,
            formula: f,
        };
    }
    if (isNumber(o)) {
        return {
            display: o + n,
            formula: f,
        };
    }
    if (isOperator(o)) {
        return {
            display: n,
            formula: f + ' ' + o.slice(-1),
        };
    }

    return null;
};

export const inputAnOperator = (o, n, f) => {
    // console.log(
    //     `inputAnOperator  |  Old: ${o}  |  Current: ${n}  |  Formula: ${f}  `
    // );

    // if (o === '0') {
    //     if (n === '*')
    //         return {
    //             display: n,
    //             formula: f + ' ' + o,
    //         };
    //     else return null;
    // }
    if (isNumber(o)) {
        return {
            display: n,
            formula: f + ' ' + o,
        };
    }
    if (isOperator(o)) {
        return {
            display: o + n,
            formula: f,
        };
    }

    return null;
};

export const calculate = (f) => {
    console.log('calculating..', f);
    let answer;

    // Split the formula string
    const input = f.split(' ');
    console.log('input:', input);

    // Clean up the formula
    if (!input[0]) input.shift();
    if (isOperator(input[input.length - 1])) input.pop();
    console.log('input:', input);

    let arr = input.slice();
    OPERATIONS.forEach((op) => {
        arr = operate(arr, op);
    });

    console.log('arr calculated:', arr);
    answer = arr.pop();

    return answer;
};

export const operate = (arr, op) => {
    if (!arr) return [];

    let index = arr.indexOf(op.char);
    console.log(`: ${index} is the indexOf ${op.char} in ${arr}`);

    if (index < 1) return arr;

    let left = arr.slice(0, index - 1);
    console.log('left', left);

    let middle = arr.slice(index - 1, index + 2);
    console.log('middle', middle);

    let right = arr.slice(index + 2);
    console.log('right', right);

    let answer;
    let a = toNumber(middle[0]);
    let b = toNumber(middle[2]);
    if (a && b) answer = op.fn(a, b);

    let after = [...left, answer, ...right];
    console.log('after', after);

    return operate(after, op);
};

export const keyboardEventHandler = (e) => {
    const keyd = '' + e.key;
    // console.log('KEY:', keyd, typeof keyd);

    let id;
    if (keyd === '=') id = 'equals';
    else {
        const input = buttons.find((b) => b.input === keyd);
        id = input?.id;
    }

    const btn = id ? document.getElementById(id) : null;
    // console.log('BUTTON:', btn);

    if (btn) {
        // simulate mouse click
        btn.dispatchEvent(
            new MouseEvent('click', { bubbles: true, view: window })
        );
    }
};
