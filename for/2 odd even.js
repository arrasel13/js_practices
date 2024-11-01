/***

Subtask-1:

Find all the odd numbers from 61 to 100.
 */
/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

// Task 1


for (let oddNum = 61; oddNum <= 100; oddNum++) {
    if (oddNum % 2 !== 0) {
        console.log("Odd Numbers are: ", oddNum);
    }
}

for (let evenNum = 78; evenNum <= 98; evenNum++) {
    if (evenNum % 2 === 0) {
        console.log("Even Numbers are: ", evenNum);
    }
}