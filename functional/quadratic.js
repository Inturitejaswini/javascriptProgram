/******************************************************************************
 *  Execution       :   1. default node         cmd> node quardratic.js 
 *                      2. if nodemon installed cmd> nodemon quadratic.js
 * 
 *  Purpose         :   T find the roots of the equation a*x*x + b*x + c. 
 * 
 *  @description    
 * 
 *  @file           :quadratic.js
 *  @overview       : T find the roots of the equation a*x*x + b*x + c. 
 *  @module         :quadratic - This is optional if expeclictly its an npm or local package
 *  @author         :Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-12-2019
 *
 ******************************************************************************/
let readline = require("readline-sync");
let a = readline.question("enter a value");
let b = readline.question("enter b value");
let c = readline.question("enter c value");
let util=require('../utility/functionalUtility');
let result=util.quadratic(a,b,c);
console.log("print values  ",result);

