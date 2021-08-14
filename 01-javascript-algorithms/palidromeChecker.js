/** 
    Palindrome Checker 

    Return true if the given string is a palindrome. Otherwise, return false.

    A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

    Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

    We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

    We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
    
*/

function palindrome(str) {
    let arr = str.toLowerCase().match(/[a-z0-9]/g);
    let hafLen = Math.ceil(arr.length / 2);

    let j = arr.length - 1;
    for (let i = 0; i < hafLen; i++) {
        // console.log(arr[i], arr[j]);
        if (arr[i] !== arr[j]) {
            console.log(false, str);
            return false;
        }
        j--;
    }

    console.log(true, str);
    return true;
}

palindrome('_eye');
palindrome('My age is 0, 0 si ega ym.');
palindrome('almostomla');
palindrome('A man, a plan, a canal. Panama');
palindrome('not a palindrome');
