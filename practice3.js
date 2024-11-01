// ### Task-3:

// Write a function to count the number of vowels in a string.

function countVowels(givenInput, vowels) {
    let countNum = 0;
    for (let val1 of givenInput) {
        for (let val2 of vowels) {
            if (val1.toLowerCase() === val2.toLowerCase()) {
                countNum++;
            } else {
                continue;
            }
        }
    }
    return countNum;
}


let givenInput = "I am learning Programming to become a programmer";
const vowels = "aeiou";

console.log(countVowels(givenInput, vowels));