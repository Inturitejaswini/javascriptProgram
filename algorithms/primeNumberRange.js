/******************************************************************************
 *  Execution       :   1. default node         cmd> node primenumber range.js 
 *                      2. if nodemon installed cmd> nodemon primenumberrange.js
 * 
 *  Purpose         :  Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 

 *  @description    
 *
 *  @module         : primenumberrange- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini<chowdarytejaswini2@gmail.com>
 *  @file           : primenumberrange.js
 *  @overview       : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 

 *  @version        : 1.0
 *  @since          : 19-12-2019
 *
 ******************************************************************************/
let readline = require("readline-sync");
let util=require('../utility/algorithmsUtility');
try{
let number= readline.question("Enter a number :")
let result=util.isPrimeRange(number);
console.log("the number is ",result);
if(result===true){
    console.log("it is a prime");
}else{
    console.log("not a prime");
}
}
catch(e){
    console.log(e);
}

