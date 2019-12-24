
 
 let readline = require("readline-sync");
 let util = require('../utility/dataStructuresUtility');
 try{
 let word=readline.question("enter a word");
 let result=util.checkPallindrome(word);
 console.log(result);   
 }
 catch(e){
     console.log(e);
 }