/******************************************************************************
 *  Execution       :   1. default node         cmd> node harmonicNumber.js 
 *                      2. if nodemon installed cmd> nodemon harmonicNumber.js
 * 
 *  Purpose         :to print nth harmonic value
 *  @description    
 * 
 *  @file           : harmonicNumber.js
 *  @overview       : to print nth harmonic value
 *  @module         : harmonicNumber- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 14-12-2019
 *
 ******************************************************************************/

let readline=require('readline-sync');
let util=require("../utility/functionalUtility");
try{
let number=readline.question("enter the value:");
let result=util.har(number);
console.log("nth harmonic value",result);
}catch(e){
    console.lo(e);
}