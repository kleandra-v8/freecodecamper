/** 
    Roman Numeral Converter 

    Convert the given number into a roman numeral.

    All roman numerals answers should be provided in upper-case.

*/

const romans = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
};

function getRoman(base, value) {
    let str = '';
    switch (value) {
        case 1:
        case 2:
        case 3:
            str = romans[base].repeat(value);
            break;
        case 4:
            str = romans[base] + romans[base * 5];
            break;
        case 5:
            str = romans[base * 5];
            break;
        case 6:
        case 7:
        case 8:
            str = romans[base * 5] + romans[base].repeat(value - 5);
            break;
        case 9:
            str = romans[base] + romans[base * 10];
            break;
    }
    // console.log(str);
    return str;
}

function convertToRoman(num) {
    if (num > 3999) return null;

    let bases = [1000, 100, 10, 1];
    let remainder = num;
    let roman = '';

    for (let base of bases) {
        let value = Math.floor(remainder / base);
        if (value > 0) {
            remainder = remainder % base;
            roman += getRoman(base, value);
        }
        // console.log(value, base, remainder);
        if (remainder <= 0) break;
    }

    return roman;
}

let result = convertToRoman(649);
console.log(result);
