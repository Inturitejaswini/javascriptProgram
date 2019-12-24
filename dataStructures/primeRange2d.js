 
/******************************************************************************
 *  Execution       :   1. default node         cmd> node primerange2d.js 
 *                      2. if nodemon installed cmd> nodemodule primeRange2d.js
 *                    
 *  Purpose         :Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 
 *                  Store the prime numbers in a 2D Array, the first dimension represents the range 0-100,
 *                 100-200, and so on.

 *  @description    
 * 
 *  @file           : primeRange2d.js
 *  @overview       :hile the second dimension represents the prime numbers in that range.
 *  @module         :primeRange2d- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-12-2019
 *
 ******************************************************************************/
 
let readline = require("readline-sync");
 let util = require('../utility/dataStructureUtility');
 try{
 let number=readline.question("enter a number");
 let result=util.is2DPrime(number);
 console.log(result);
 }
 catch(e){
     console.log(e);
 }