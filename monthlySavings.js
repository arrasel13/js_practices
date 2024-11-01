function monthlySavings(givenArr, livingCost) {
    
    if (typeof givenArr !== "object" || typeof livingCost !== "number") {
        return "Invalid input, please give an array for first parameter and a number for second parameter";
    }

    let livingcost = livingCost;
    let totalEarning = 0;

    for (let earning of givenArr) {
        if (earning >= 3000) {
            taxDeduct = (earning * 20) / 100;
            // remainingEarning = earning - taxDeduct;
            earning = earning - taxDeduct;
            // totalEarning = totalEarning + remainingEarning;
        }
        totalEarning = totalEarning + earning;
    }

    let totalSavings = totalEarning - livingCost;

    if (totalSavings < 0) {
        return "Earn More";
    } else {
        return "Your Savings amount is: " + totalSavings;
    }

}

// console.log(monthlySavings([1000, 2000, 3000], 5400));
// console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
// console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
console.log(monthlySavings(100, [ 900 , 2700 , 3400]));
