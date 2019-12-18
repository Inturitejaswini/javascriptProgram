/******************************************************************************
 *  Execution       :   1. default node         cmd> node permutations.js 
 *                      2. if nodemon installed cmd> nodemon permutations.js
 * 
 *  Purpose         :  Recursive function to generate all permutations of a String. 
 * 
 *  @description    
 *
 *  @module         : permutations- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini<chowdarytejaswini2@gmail.com>
 *  @file           : permutations.js
 *  @overview       : Check if the arrays returned by two string functions are equal. 
 *  @version        : 1.0
 *  @since          : 13-12-2019
 *
 ******************************************************************************/
    let readline = require("readline-sync");
    let util = require('../utility/algorithmsUtility')
    //take one inout of strings
    let string = readline.question("enter one string:");
    let results = util.getAllPermutations(string);
    console.log(results);