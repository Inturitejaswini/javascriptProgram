 let readline = require("readline-sync");
 let util = require('../utility/dataStructuresUtility');
 try{
 let balance=readline.question("enter initial bank balance");
 let people=readline.question("enter no of people");
 let result=util.bankTransaction(balance,people);
 console.log(result);
 }
 catch(e){
     console.log(e);
 }