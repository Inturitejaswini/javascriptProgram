/******************************************************************************
 *  Execution       :   1. default node         cmd> node CouponNumber.js 
 *                      2. if nodemon installed cmd> nodemon CouponNumber.js
 * 
 *  Purpose         : Genrate distinct Coupon numbers  
 * 
 *  @description    
 * 
 *  @file           : Coupon.js
 *  @overview       : Coupon module to generate distinct coupon numbers.
 *  @module         : Coupon - This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-12-2019
 *
 ******************************************************************************/

let readline = require("readline-sync");
let util=require('../utility/functionalUtility');
let number= readline.question("Enter lNumber of  Coupon You need :")
console.log("The " +  + " Distinct Coupans are:");
let result=util.coupanNumber(number);
console.log("coupanNumber is ",result);

