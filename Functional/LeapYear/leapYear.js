function CheckLeapYear(year){
    if (year.length != 4 || isNaN(year)) {
        console.log("Please enter 4 digit Year");
    }
    else {
        if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) 
        {
            console.log("Year " + year + " is a Leap Year"); 
        }
        else {
            console.log("Year " + year + " is not a Leap Year"); 
        }
    }
}
const readline = require("readline-sync");
const year = readline.question("Enter any year:");
CheckLeapYear(year);
