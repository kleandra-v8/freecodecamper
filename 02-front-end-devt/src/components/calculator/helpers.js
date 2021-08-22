import buttons from './buttons';
import { multiply, divide, add, subtract } from 'lodash';

const OPERATIONS = {
    '*': multiply,
    '/': divide,
    '+': add,
    '-': subtract,
};

export const isNumber = (str) => /[-]?\d+([.]?\d*)/.test(str);

export const isOperator = (str) => /[/*\-+=]+$/.test(str);

export const hasDecimal = (str) => /[.]/.test(str);

export const getOperator = (ops) => {
    let op = ops.slice(-1);

    if (op === '-' && ops.length > 1)
        return {
            sign: '-',
            operator: ops.slice(-2, -1),
        };
    else
        return {
            sign: '',
            operator: op,
        };
};

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
        const { sign, operator } = getOperator(o);

        return {
            display: sign + n,
            formula: f + ' ' + operator,
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
        const { sign, operator } = getOperator(o);

        return {
            display: sign + '0' + n,
            formula: f + ' ' + operator,
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
        const { sign, operator } = getOperator(o);

        return {
            display: sign + n,
            formula: f + ' ' + operator,
        };
    }

    return null;
};

export const inputAnOperator = (o, n, f) => {
    // console.log(
    //     `inputAnOperator  |  Old: ${o}  |  Current: ${n}  |  Formula: ${f}  `
    // );

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
    const input = f.trim().split(' ');
    // console.log('input:', input);

    let arr = input.slice();
    arr = operate(arr, '*/');
    arr = operate(arr, '+-');

    // console.log('arr calculated:', arr);
    answer = arr?.pop();

    return answer;
};

export const operate = (arr, ops) => {
    if (!arr) return [];

    let index = arr.findIndex((i) => i === ops[0] || i === ops[1]);
    // console.log('Index:', index);

    if (index < 1) return arr;

    let char = arr[index];
    let operation = OPERATIONS[char];
    // console.log(`... ${index} is the indexOf ${char} in ${arr}.`);

    let left = arr.slice(0, index - 1);
    // console.log('left', left);

    let middle = arr.slice(index - 1, index + 2);
    // console.log('middle', middle);

    let right = arr.slice(index + 2);
    // console.log('right', right);

    let answer;
    let a = Number(middle[0]);
    let b = Number(middle[2]);
    answer = operation(a, b);

    let after = [...left, answer, ...right];
    // console.log('after', after);

    return operate(after, ops);
};

export const keyboardEventHandler = (e) => {
    const keyd = '' + e.key;
    // console.log('KEY:', keyd, typeof keyd);

    let id;
    if (keyd === '=') id = 'equals';
    else if (keyd === 'Backspace') id = 'backspace';
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
