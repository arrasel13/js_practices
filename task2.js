
// ### Task 2

// Write a JavaScript code to get the even numbers from an array using any looping technique.

// **Input:**
// `const numbers = [12, 98, 5, 41, 23, 78, 46];`

// **Output:**

// `[12, 98, 76, 46]`

const numbers = [12, 98, 5, 41, 23, 76, 46];

let newNumbers = [];

// for (let num of numbers) {
//     if (num % 2 === 0) {
//         newNumbers.push(num);
//     } else {
//         continue;
//     }
// }

// for (let num of numbers) {
//     if (num % 2 !== 0) {
//         continue;
//     }
//     newNumbers.push(num);
// }

let num = 0;
while (num < numbers.length) {
    if (numbers[num] % 2 !== 0) {
        num++;
        continue;
    }
    newNumbers.push(numbers[num]);
    num++;
}

console.log(newNumbers);