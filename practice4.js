// ### Task-4:
// Write a function to find the longest word in a given string.
// sample-input:
// I am learning Programming to become a programmer
// sample-output: Programming

function longestWord(givenInput) {
    splitText = givenInput.split(" ");
    sLength = splitText.length;
    let stextLength = 0;
    // let stextIndex = 0;
    for (let i = 0; i < splitText.length; i++){
        if (stextLength < splitText[i].length) {
            stextLength = splitText[i].length;
            stextIndex = i;
        }
    }

    let longWord = splitText[stextIndex];
    return longWord;

}

// let givenInput = "I am learning Programming to become a programmer";
let givenInput = "Bacon ipsum dolor amet pancetta doner tri-tip beef ribs, alcatra turkey tongue meatloaf porchetta.";

console.log(longestWord(givenInput));
