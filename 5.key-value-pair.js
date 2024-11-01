// Loop through an object and print the key-value pairs with their types
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

// Output:
// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean

for (let i in myObject) {
    console.log("key: " + i + " | " + "type: " + typeof myObject[i]);
}
