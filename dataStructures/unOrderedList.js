let readline = require("readline-sync");
let util=require('../utility/dataStructureUtility'); //import the linkedlist.js file
let fs = require("fs"); //built in library for read file
let data = fs.readFileSync('StringList.txt'); //read the data from StringList.txt file
console.log("String data read from file:\n" + data);
stringArray = data.toString().toLocaleLowerCase().split(' '); //convert string data to array
searchWord = readline.question("Enter a word to search : "); //user input to search element
util.unorderedList(stringArray,searchWord);                
