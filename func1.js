// ### Task-1  
// Take four parameters. Multiply the four numbers and then return the result 


function resultNumber(numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(resultNumber([4, 5, 6, 7]));



