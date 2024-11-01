function password(givenObj) {

    if (Object.keys(givenObj).length != 3) {
        return "Please provide three object value";
    }
    
    givenName = givenObj.name;
    givenBirthYear = givenObj.birthYear;
    givenSiteName = givenObj.siteName;
    uppercaseSiteName = givenSiteName[0].toUpperCase() + givenSiteName.substring(1);

    let newPassword;

    if (givenBirthYear.toString().length != 4) {
        return "Invalid Birth year, please give birth year's 4 digits";
    }

    newPassword = uppercaseSiteName + "#" + givenName + "@" + givenBirthYear;
    return newPassword;

}

// console.log("Your Password is: ", password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));
// console.log("Your Password is: ", password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
// console.log("Your Password is: ", password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log("Your Password is: ", password({ name: "maisha", birthYear: 2002 }));
