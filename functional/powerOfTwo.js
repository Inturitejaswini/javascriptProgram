
/******************************************************************************
 *  Execution       :   1. default node         cmd> node powerOfTwo.js 
 *                      2. if nodemon installed cmd> nodemon powerOfTwo.js
 * 
 *  Purpose         :  to print a table of the
 *                     powers of 2 that are less than or equal to 2^N.
 * 
 *  @description    
 * 
 *  @file           : powerOfTwo.js
 *  @overview       :  This program takes a command-line argument N and prints a table of the
 *                     powers of 2 that are less than or equal to 2^N.
 *  @module         : powerOfTwo This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-12-2019
 *
 ******************************************************************************/
let readline=require("readline-sync");
let util=require('../utility/functionalUtility');
try{
let number=readline.question("enter n number");
let result=util.powerOfTwo(number);
console.log("powerOfTwo is ",result);
}
catch{
    console.log(e);
}