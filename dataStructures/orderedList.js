/******************************************************************************
 *  Execution       :   1. default node         cmd> node orderedList.js 
 *                      2. if nodemon installed cmd> nodemon ordredList.js
 * 
 *  Purpose         :    Read .a List of Numbers from a file and arrange it ascending 
 *                      Order in a Linked List. Take user input for a number, if found then pop the number out 
 *                      of the list else insert the number in appropriate position.

 * 
 *  @description    
 * 
 *  @file           : ordredList.js
 *  @overview       : Read from file the list of Numbers and take user input for a new number.
 *  @module         : orderedList - This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 20-12-2019
 *
 ******************************************************************************/

let fs = require("fs"); //built in library for read file
let readline = require("readline-sync");
let linkedList=require('../utility/dataStructureUtility'); //import the orderedlinkedlist.js fil
let data = fs.readFileSync('../../number.txt'); //read the data from StringList.txt file
try{
console.log("Numbers data read from file: \n\n" + data);
searchNumber = readline.question("Enter a number to search"); //user input to search element
linkedList.orderedList(data,searchNumber); 
}
catch(e){
    console.log(e);
}