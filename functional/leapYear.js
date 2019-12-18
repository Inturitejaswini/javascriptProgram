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
let readline = require("readline-sync");
let year = readline.question("Enter any year:");
let util=require('../utility/functionalUtility');
let result=util.checkLeapYear(year);
console.log("year is ",result);

