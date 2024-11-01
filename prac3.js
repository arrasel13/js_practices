
// ### Task-3:

// Your task is to calculate the `total budget` required to buy electronics:

//         laptop = 35000 tk
//         tablet = 15000 tk
//         mobile = 20000 tk

// Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.


function calculateElectronicsBudget(nLaptop, nTablets, nMobile) {
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    let totalBudget = (laptop * nLaptop) + (tablet * nTablets) + (mobile * nMobile);

    return totalBudget;

}

console.log("Total money required: ", calculateElectronicsBudget(1, 2, 3));