/******************************************************************************
 *  Execution       :   1. default node         cmd> node windChill.js 
 *                      2. if nodemon installed cmd> nodemon windChill.js
 * 
 *  Purpose         :  Program to find windchill using formula 
 *                     w = 35.74 + 0.6215 * t + (0.4275 * t + 35.75) * Math.pow(v, 0.16);
 *  @description    
 * 
 *  @file           : windChill.js
 *  @overview       :That takes two double command-line arguments t and v and prints the wind chill. 
 *  @module         : windChill- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-12-2019
 *
 ******************************************************************************/
let readline = require("readline-sync");
let util=require('../utility/functionalUtility')
let t = readline.question("enter t value:");
let v = readline.question("enter v value:");
let result=util.windChill(t,v);
console.log(result);