// ### Task-2: 
// You are given an array of numbers. Count how many times the a number is repeated in the array. 
// sample-input: 
// numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2

// <br/>

// sample-input: 
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

function countDuplicateNumber(numbers, searchValue) {
    let countValue = 0;
    for (let num of numbers) {
        if (num === searchValue) {
        countValue++;
        } else {
            continue;
        }
    }
    return countValue;
}

let numbers = [5, 6, 11, 12, 98, 5];
let findvalue1 = 5;
let findvalue2 = 25;
console.log(countDuplicateNumber(numbers, findvalue1));
console.log(countDuplicateNumber(numbers, findvalue2));