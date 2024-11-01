
// ### Task 1

// Write a JavaScript code to reverse the array colors `without using the reverse method`.

// **Input:**
// `const colors = ['red', 'blue', 'green', 'yellow', 'orange']`

// **Output:**

// `['orange', 'yellow', 'green', 'blue', 'red']`


const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let newColors = [];

// for (let i = 0; i < colors.length; i++) {
//     newColors.unshift(colors[i]);
// }

for (let color of colors) {
    newColors.unshift(color);
}

console.log(newColors);

