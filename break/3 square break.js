/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let num = 2;
while (num <= 100) {
    console.log(num);
    if (Math.sqrt(num)**2 === num) {
        console.log("First Square Number is: ", num);
        break;
    }
    num++;
}


