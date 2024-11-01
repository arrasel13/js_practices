
// ### Task-2

// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

let result = 0;
function oddEven(inputNumber) {
    if (inputNumber % 2 === 0) {
        result = inputNumber / 2;
        return result;
    } else {
        result = inputNumber * 2;
        return result;
    }
}

console.log(oddEven(6));
console.log(oddEven(9));