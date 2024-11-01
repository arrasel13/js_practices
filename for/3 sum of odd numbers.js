

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

// Task1
let oddNum = 91;
let sumOddNum = 0;
for (oddNum; oddNum <= 129; oddNum++){
    if (oddNum % 2 !== 0) {
        sumOddNum = sumOddNum + oddNum;
    }
}

console.log("Total Sum of Odd Num: ", sumOddNum);

// Task2
let evenNum = 51;
let sumEvenNum = 0;
for (evenNum; evenNum <= 85; evenNum++){
    if (evenNum % 2 !== 0) {
        sumEvenNum = sumEvenNum + evenNum;
    }
}

console.log("Total Sum of Even Num: ", sumEvenNum);