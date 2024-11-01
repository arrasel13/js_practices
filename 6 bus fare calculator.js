/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 60;

if (age <= 10) {
    console.log("Children entry free");
} else if (age > 10 && age <= 24) {
    console.log("Student will get 50% discount");
} else if (age >= 60) {
    console.log("Senior citizens will get 15% discount");
} else {
    console.log("You need to pay ticket fare 800 tk");
}