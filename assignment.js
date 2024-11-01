// Q-1
const fruits = ['apple', 'jackfruit', 'banana', 'water malone', 'pineapple'];
console.log(fruits);
console.log(fruits[3]);
fruits[2] = 'jambura';
console.log(fruits);

// Q-2
const touristSpot = ['sajek', 'lala khal', 'shylet'];
console.log(touristSpot);
touristSpot.push('sada pathor');
console.log(touristSpot);
touristSpot.push('bandarban', 'tanguar haor');
console.log(touristSpot);
touristSpot.pop();
console.log("Final Output: " + touristSpot);

// Q-3
const bookList = ['The Jungle', 'Beloved', 'Twilight', 'The Castle', 'Life of Pi'];

if (bookList.includes('javascript')) {
    console.log('JavaScript book is available on this list');
} else {
    console.log('JavaScript book is not found on this list');
}

// Q-4
const checkArray1 = [1, 2, 3, 4, 5];
const checkArray2 = [];
const checkArray3 = 'Karim';

console.log(Array.isArray(checkArray1));
console.log(Array.isArray(checkArray2));
console.log(Array.isArray(checkArray3));

// Q-5
const num1 = [1, 2, 3, 4];
const num2 = [5, 6, 7, 8];
console.log(num1.concat(num2));
