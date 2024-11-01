// ### Task-5:

// Generate a random number between 10 to 20.

function randNumber(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}

console.log(randNumber(10, 20));
