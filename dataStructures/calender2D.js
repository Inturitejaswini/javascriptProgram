/******************************************************************************
 *  Execution       :   1. default node         cmd> node calender2d.js 
 *                      2. if nodemon installed cmd> nodemodule calender2d.js
 * 
 *  Purpose         :     takes the month and year as command-line arguments and prints the
 *                         Calendar of the month.
 *  @description    
 * 
 *  @file           : calender2d.js
 *  @overview       : Store the Calendar in an 2D Array, the first dimension the week of the 
 *                    month and the second dimension stores the day of the week.
 *  @module         : calender2d- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-12-2019
 *
 ******************************************************************************/
let readline = require('readline-sync');
let util = require('../Utility/dataStructuresUtility');
try{
let month=readline.question("enter a month");
let day=readline.question("enter a day");
let year=readline.question("enter a year");
calender=day(month,day,year);
let result=util.calender();
console.log(result);
}
catch(e){
    console.log(e);
}