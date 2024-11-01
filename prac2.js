// ### Task -2: 
// Find the friend with the smallest name.
// <br>
// `const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`

function smallestFriend(heights2) {
    let nameLength = heights2[0].length;
    let smallestName = heights2[0];

    for (let height of heights2) {
        if (nameLength > height.length) {
            nameLength = height.length;
            smallestName = height;
        }
    }
    return smallestName;
}

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log("Smallest Friend Name: ", smallestFriend(heights2));