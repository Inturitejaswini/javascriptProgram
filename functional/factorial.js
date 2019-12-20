/******************************************************************************
 *  Execution       :   1. default node         cmd> factorial.js 
 *                      2. if nodemon installed cmd> nodemon factorial.js
 * 
 *  Purpose         :   Number to find the prime factors 
 * 
 *  @description    
 * 
 *  @file           : factorial.js
 *  @overview       :Computes the prime factorization of N using brute force.

 *  @module         : Distance- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 15-12-2019
 *
 ******************************************************************************/
const readLine= require('readline-sync');
let  N = readLine.question("enter any integer "); // asking user to enter the number  
let util=require('../utility/functionalUtility');
let result=util.factorial(N);
console.log("factorial value is ",result);

