/******************************************************************************
 *  Execution       :   1. default node         cmd> node leapYear.js 
 *                      2. if nodemon installed cmd> nodemon leapYear.js
 * 
 *  Purpose         :  Program to check leap year or not 
 * 
 *  @description    
 * 
 *  @file           : leapYear.js
 *  @overview       :  Program to check leap year or not 
 *  @module         : Leapyear- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-12-2019
 *
 ******************************************************************************/
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
