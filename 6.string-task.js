// Task-1:
// Count how many times a string has the letter a
let sentence = "Count how many times A string has the letter a";
let count = 0;
for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === 'a') {
        count++;
    }
};
console.log(count);

// Task-2:
// Count how many times a string has the letter a or A
let sentence1 = "Count how many times A string has the letter a";
let count1 = 0;
for (let i = 0; i < sentence1.length; i++) {
    if (sentence1[i].toLowerCase() === 'a') {
        count1++;
    }
};
console.log(count1);

// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u
let sentence2 = "Count how many times A string has the letter a";
let vowels = "aeiou";
for (let i = 0; i < vowels.length; i++) {
    chars = vowels[i];
    if (sentence2.includes(chars)) {
        console.log(chars + " is, included.");
        continue;
    }
    else {
        break;
    }
}


// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
let givenText = "abcdXz";
if (givenText.includes('x')) {
    newText = givenText.replace('x', 'y');
    console.log(newText);
} else if (givenText.includes('X')) {
    newText = givenText.replace('X', 'Y');
    console.log(newText);
}
// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

// Task-5:
// Capitalize Every first Letter of each word in a String

let sText = "Capitalize Every first Letter of each word in a String";
let stText = sText.split(' ');
let newArray = [];

for (let i in stText) {
    stText1 = stText[i];
    stText2 = stText1.charAt(0).toUpperCase() + stText1.slice(1);
    newArray.push(stText2);
}

let updateText = newArray.join(' ');

console.log(updateText);

