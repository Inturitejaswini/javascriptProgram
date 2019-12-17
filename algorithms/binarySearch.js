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
 *  @since          : 13-12-2019
 *
 ******************************************************************************/


let readline = require("readline-sync");
const fs = require("fs"); //built in library for read file
try {
    let stringArray = fs.readFileSync("../StringList.txt").toString().split(" "); //read the file and split it to array
    console.log("StringList.txt file string list");
    console.log(stringArray);
    //get word to search
    let searchWord = readline.question("enter word to search:");
    //call binary search function() and assign result
    binarySearch(stringArray, searchWord);
    if (result == -1) {
        console.log(searchWord + " is not present");
    }
    else {
        console.log(searchWord + " is present at index " + result);
    }
}
catch (error) {
    console.log(error);
}
