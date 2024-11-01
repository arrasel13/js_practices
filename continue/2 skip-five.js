/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

let num = 55;
while (num <= 85) {
    if (num % 5 === 0) {
        num++;
        continue;
    }
    console.log("Numbers are divisible by 5 is: ", num);
    num++;
}