/******************************************************************************
 *  Execution       :   1. default node         cmd> factorial.js 
 *                      2. if nodemon installed cmd> nodemon factorial.js
 * 
 *  Purpose         :   Number to find the prime factors 
 * 
 *  @description    
 * 
 *  @file           : factorial.js
 *  @overview       :Computes the prime factorization of N using brute force.

 *  @module         : Distance- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 15-12-2019
 *
 ******************************************************************************/
let readLine= require('readline-sync');
let util=require('../utility/functionalUtility');
try{
let number= readLine.question("enter any integer ");
let result=util.factorial(number);
console.log("factorial value is ",result);
}catch(e){
    console.log(e);
}

