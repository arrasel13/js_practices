// ### Task -1: 
// Find the lowest number in the array below.
// <br>
// `const heights2 = [167, 190, 120, 165, 137];`

function minNumber(heights2) {
    let num = heights2[0];
    for (let height of heights2) {
        if (num > height) {
            num = height;
        }
    }
    return num;
}

const heights2 = [167, 190, 120, 165, 137];

console.log(minNumber(heights2));
