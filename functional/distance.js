/******************************************************************************
 *  Execution       :   1. default node         cmd> node distance.js 
 *                      2. if nodemon installed cmd> nodemon distance.js
 * 
 *  Purpose         : to find Euclidean distance from the point (x, y) to the origin (0, 0).
 *  @description    
 * 
 *  @file           : distance.js
 *  @overview       : to find the distance from the point xand y.
 *  @module         : distance - This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 14-12-2019
 *
 ******************************************************************************/
//to make user interact with script code via console

let readline=require("readline-sync");
let x=readline.question("enter the x value:");
let y=readline.question("enter the y value:");
let util=require('../utility/functionalUtility');
let result=util.distance(x,y);
console.log("distance is ",result);
