
/******************************************************************************
*  Execution       :   1. default node         cmd> node flipcoin.js 
*                      2. if nodemon installed cmd> nodemon flipcoin.js
* 
*  Purpose         : Flip Coin and print percentage of Heads and Tails

*  @description    
* 
*  @file           : fllipcoin.js
*  @overview       : Flip Coin and print percentage of Heads and Tails 
*  @module         : flipcoins - This is optional if expeclictly its an npm or local package
*  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
*  @version        : 1.0
*  @since          : 15-12-2019
*
******************************************************************************/
let readline = require("readline-sync");
let util=require('../utility/functionalUtility');
try{
let number= readline.question("Enter number of Times to Flip the coin:");
let result=util.flipCoin(number);
console.log("flipCoin is ",result);
}catch{
    console.log(e);
}