const numbers = [1, 5, 66, 11, 45, 65];

// Array length
console.log(numbers.length);

// Array index

// includes
if (numbers.includes(11)) {
    console.log("Number exists");
} else {
    console.log("Number is not found");
}

// indexof
console.log(numbers.indexOf(11));

// isArray
const nums = [];
const food = 'ros o gol l a';

console.log(Array.isArray(numbers));
console.log(Array.isArray(nums));
console.log(Array.isArray(food));

// concat()
// slice()
// splice()
