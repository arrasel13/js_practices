
function calculateMoney(numOfTicketSale) {
    if (typeof numOfTicketSale !== 'number') {
        return "You need to give a number, not a string";
    }

    if (numOfTicketSale < 0) {
        return "Give a Positive Number";
    }
    
    if (numOfTicketSale === 0) {
        return "You need to sale some tickets to give payment to Guard and stuff lunch";
    }

    const ticketPrice = 120;
    const guardPayment = 500;
    const lunchCost = 50;

    let remainAmount = (numOfTicketSale * ticketPrice) - (guardPayment + (8 * lunchCost));

    return remainAmount;

}

// console.log(calculateMoney(10));
// console.log(calculateMoney(1055));
// console.log(calculateMoney(93));
// console.log(calculateMoney(-130));
// console.log(calculateMoney(0));
console.log(calculateMoney("test"));