/******************************************************************************
 *  Execution       :   1. default node         cmd> node anagram.js 
 *                      2. if nodemon installed cmd> nodemon anagram.js
 *                  
 * 
 *  Purpose         : .One string is an anagram of another if the second is simply a 
 *                     rearrangement of the first.

*  @description    
 * 
 *  @file           : anagram.js
 *  @overview       :  The Two Strings are Anagram or not
 *  @module         : anagrame- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-12-2019
 *
 ******************************************************************************/

let readline=require('readline-sync');
let string1=readline.question("enter the first string");
let string2=readline.question("enter the second string");
let util = require("../utility/algorithmsUtility");
let result=util.isAnagram(string1,string2);
console.log("it is an anagram",result); 
    