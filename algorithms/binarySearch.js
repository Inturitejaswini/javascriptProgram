/******************************************************************************
 *  Execution       :   1. default node         cmd> node binarySearch.js 
 *                      2. if nodemon installed cmd> nodemon binarySearch.js
 * 
 *  Purpose         :   Read in a list of words from File. Then prompt the user to
 *  enter a word to search the list. The program reports if the search word is found in the list.

 * 
 *  @description    
 * 
 *  @file           : binarySearch.js
 *  @overview       : Print the result if the word is found or not.
 *  @module         : binarySearch - This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 17-12-2019
 *
 ******************************************************************************/
 let readline = require("readline-sync");
 let util=require('../utility/algorithmsUtility');
 let value = readline.question("enter word to search:");
 let items=["ttt","hsf","tyru","uytre"];
 let result = util.binarySearch(items,value);
    if (result == -1) {
        console.log(value+ " is not present");
    }
    else {
        console.log(value + " is present at index " + result);
    }