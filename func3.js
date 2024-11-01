// ### Task-3

// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers)
{
    numLength = numbers.length;
    total = 0;
    for (let number of numbers) {
        total += number;
    }
    avgNumber = total / numLength;
    return avgNumber;
}

console.log(make_avg([2, 11, 49, 52, 6]));

