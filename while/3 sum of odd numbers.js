

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

// Task1
let num = 61;
let sum = 0;
while (num <= 100) {
    if (num % 2 !== 0) {
        sum = sum + num;
        num++;
    }
    console.log("Odd Number Total: ", sum);
    num++;
}

// Task2
let num2 = 78;
let sum2 = 0;
while (num2 <= 98) {
    if (num2 % 2 === 0) {
        sum2 = sum2 + num2;
        num2++;
    }
    num2++;
    console.log("Even Number Total: ", sum2);
}
