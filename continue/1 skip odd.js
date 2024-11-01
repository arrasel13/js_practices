/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

let num = 1;

while (num <= 40) {
    // console.log(num);
    if (num % 2 !== 0) {
        num++;
        continue;
    }
    console.log("Even Number is: ", num);
    num++;
}

