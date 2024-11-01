function deleteInvalids(givenArray) {
    // console.log(givenArray);
    if (typeof givenArray !== 'array') {
        return "Invalid Array, please provide a valid array";
    }
    
    let newArray = [];
    for (let arrayItems of givenArray) {
        if (typeof arrayItems !== 'number' || isNaN(arrayItems)) {
            // console.log("NaN paisi");
            continue;
        } else {
            newArray.push(arrayItems);
        }
    }
    return newArray;

}

// console.log(deleteInvalids([NaN, 1, 12, 0, -1, undefined]));
// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }] ));
// console.log(deleteInvalids(["1" , {num:2} , NaN ]));
// console.log(deleteInvalids([ 1 , 2 , -3 ]));
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));
