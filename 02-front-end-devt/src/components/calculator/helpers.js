export const isNumber = (str) => /\d+([.]?\d*)/.test(str);

export const isOperator = (str) => /[/*\-+]+/.test(str);

export const hasDecimal = (str) => /[.]/.test(str);

export const inputAZero = (o, n, f) => {
    console.log(
        `inputAZero  |  Old: ${o}  |  Current: ${n}  |  Formula: ${f}  `
    );
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
            formula: f,
        };
    }

    return null;
};

export const inputADecimal = (o, n, f) => {
    console.log(
        `inputADecimal  |  Old: ${o}  |  Current: ${n}  |  Formula: ${f}  `
    );

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
            formula: f,
        };
    }

    return null;
};

export const inputANumber = (o, n, f) => {
    console.log(
        `inputANumber  |  Old: ${o}  |  Current: ${n}  |  Formula: ${f}  `
    );

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
            formula: f,
        };
    }

    return null;
};

export const inputAnOperator = (o, n, f) => {
    console.log(
        `inputAnOperator  |  Old: ${o}  |  Current: ${n}  |  Formula: ${f}  `
    );

    if (o === '0') {
        if (n === '*')
            return {
                display: n,
                formula: f + o + n,
            };
        else return null;
    }
    if (isNumber(o)) {
        return {
            display: n,
            formula: f + o + n,
        };
    }
    if (isOperator(o)) {
        return {
            display: n,
            formula: f + n,
        };
    }

    return null;
};
