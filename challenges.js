// Sum Zero

let array = [1, 2, 3, -2]

const addToZero = arrOfNums => {
    let result = false;

    for (let i = 0; i < arrOfNums.length; i++) {
        for (let j = 0; j < arrOfNums.length; j++) {
            if (i !== j) {
                if (arrOfNums[i] + arrOfNums[j] === 0) {
                    result = true;
                }
            }
        }
    }
    return result;
}

console.log(addToZero(array));

// Space complexity is O(n^2)

// Unique Characters

const hasUniqueChars = str => {
    const uniqueChars = new Set([]);

    for (let i = 0; i < str.length; i++) {
        uniqueChars.add(str[i]);
    }

    if (uniqueChars.size === str.length) {
        return true;
    } else {
        return false;
    }
}

console.log(hasUniqueChars('Monday'));

// Space complexity is O(n)

// Pangram Sentence

const isPangram = string => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const strArr = string.split('');

    for (let i = 0; i < alphabet.length; i++) {
        if (strArr.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));

// Space complexity is O(n)

// Longest Word

const findLongestWord = arrOfStrings => {
    let result = '';

    for (let i = 0; i < arrOfStrings.length; i++) {
        if (result.length < arrOfStrings[i].length) {
            result = arrOfStrings[i];
        }
    }

    return result.length;
}

console.log(findLongestWord(["hi", "hello"]));

// Space complexity is O(n^2)