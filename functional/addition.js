/******************************************************************************
 *  Execution       :   1. default node         cmd> node addition.js 
 *                      2. if nodemon installed cmd> nodemon addition.js
 * 
 *  Purpose         : to find addition of  (x, y) and find the result.
 *  @description    
 * 
 *  @file           : distance.js
 *  @overview       : to find the ddition of two numbers.
 *  @module         : distance - This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 14-12-2019
 *
 ******************************************************************************/

let readline=require('readline-sync');
let util = require("../utility/functionalUtility");
try{
    let x=readline.question("enter x value");
    let y=readline.question("enter y value");
    let result=util.add(x,y);
    console.log(result);
}
catch(e){
    console.log(e);
}