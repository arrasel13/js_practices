function checkName(givenName) {
    if (typeof givenName != 'string') {
        return "Invalid input, please give correct name";
    }

    const values = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    namesLastWord = givenName[givenName.length - 1];
    // console.log(namesLastWord.toLowerCase());

    if (values.includes(namesLastWord.toLowerCase())) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}

console.log(checkName("Salman"));
// console.log(checkName("RAFEE"));
// console.log(checkName("Jhankar"));
// console.log(checkName(199));
// console.log(checkName(["Rashed"]));