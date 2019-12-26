/******************************************************************************
 *  Execution       :   1. default node         cmd> node unOrderedList.js 
 *                      2. if nodemon installed cmd> nodemon unOrdredList.js
 * 
 *  Purpose         :   Read the Text from a file, split it into words and arrange it as Linked List. 
 *                      Take a user input to search a Word in the List. If the Word is not found then
 *                      add it to the list, and if it found then remove the word from the List. 
 *                      In the end save the list into a file.
 * 
 *  @description    
 * 
 *  @file           : unOrdredList.js
 *  @overview       : Create a Unordered Linked List. The Basic Building Block is the Node Object. 
 *                    Each node object must hold at least two pieces of information. 
 *                    One ref to the data field and  second the ref to the next node object.

 *  @module         : unorderedList - This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 20-12-2019
 *
 ******************************************************************************/
let readline = require("readline-sync");
let util=require('../utility/dataStructureUtility'); //import the linkedlist.js file
try{
let fs = require("fs"); //built in library for read file
let data = fs.readFileSync('../../teju.txt'); //read the data from StringList.txt file
console.log("String data read from file:\n" + data);
stringArray = data.toString().toLocaleLowerCase().split(' '); //convert string data to array
searchWord = readline.question("Enter a word to search : "); //user input to search element
util.unorderedList(stringArray,searchWord);  
}
catch(e){
    console.log(e);
}              
