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
 *  @since          : 13-12-2019
 *
 ******************************************************************************/
//to make user interact with script code via console

const readline=require("readline-sync");
const x=readline.question("enter the x value:");
const y=readline.question("enter the y value:");
let distance=Math.sqrt(x*x+y*y);
console.log("distance from("+x+","+y+") to (0,0)="+distance);
