 /******************************************************************************
 *  Execution       :   1. default node         cmd> node bankCashCounter.js 
 *                      2. if nodemon installed cmd> nodemodule bankCashCounter.js
 * 
 *  Purpose         :    Create a Program which creates Banking Cash Counter where people come 
 *                      in to deposit Cash and withdraw Cash. Have an input panel to add people to Queue to either 
 *                      deposit or withdraw money and dequeue the people. Maintain the Cash Balance.

 *  @description    
 * 
 *  @file           : bankCashCounter.js
 *  @overview       :Write a Queue Class to enqueue and dequeue people to either
 *                    deposit or withdraw money and maintain the cash balance.
 *  @module         : bankCashCounter- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-12-2019
 *
 ******************************************************************************/
 
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