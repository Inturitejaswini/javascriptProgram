/******************************************************************************
 *  Execution       :   1. default node         cmd> node sumOfThree.js 
 *                      2. if nodemon installed cmd> nodemon sumOfThree.js
 *                  
 * 
 *  Purpose         :  A program with cubic running time. Read in N integers 
 *                     and counts the   number of triples that sum to exactly 0.
*  @description    
 * 
 *  @file           : sumOfThree.js
 *  @overview       : Sum of three Integer adds to ZERO
 *  @module         : sumOfThree- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-12-2019
 *
 ******************************************************************************/
let readLine = require('readline-sync');
let  n = readLine.question("enter the number of elements");
console.log("enter the elements");
let util=require('../utility/functionalUtility');
let result=util.sumOfThree(arr,n);