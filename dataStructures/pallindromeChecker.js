
 /******************************************************************************
 *  Execution       :   1. default node         cmd> node pallindromeChecker.js 
 *                      2. if nodemon installed cmd> nodemodule pallindromeChecker.js
 *                    
 *  Purpose         :A palindrome is a string that reads the same forward and backward, 
 *                   for example, radar, toot, and madam. We would like to construct an algorithm to input
 *                   a string of characters and check whether it is a palindrome.
 *  @description    
 * 
 *  @file           : pallindromeChecker.js
 *  @overview       :The solution to this problem will use a deque to store the characters of the string.
 *                   We will process the string from left to right and add each character to the rear of the deque. 
 *  @module         :pallindromeChecker- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 24-12-2019
 *
 ******************************************************************************/
 
 let readline = require("readline-sync");
 let util = require('../utility/dataStructuresUtility');
 try{
 let str=readline.question("enter a word");
 let result=util.palChecker(str);
 console.log(result);   
 }
 catch(e){
     console.log(e);
 }