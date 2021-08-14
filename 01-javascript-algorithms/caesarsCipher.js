/**
    Caesars Cipher 

    One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

    A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

    Write a function which takes a ROT13 encoded string as input and returns a decoded string.

    All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/

function rot13(str) {
    let arr = [];
    for (
        let i = 0;
        i < str.length;
        i++ // A(65) - Z(90)
    ) {
        let char = str[i];
        if (/[a-z]/i.test(char)) {
            let newCode = str.charCodeAt(i) + 13;
            if (newCode > 90) newCode -= 26;
            char = String.fromCharCode(newCode);
        }
        arr.push(char);
    }

    let cipher = arr.join('');
    console.log(cipher);
    return cipher;
}

rot13('SERR PBQR PNZC');
rot13('SERR CVMMN!');
rot13('SERR YBIR?');
rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.');
