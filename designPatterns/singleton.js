/******************************************************************************
 *  Execution       :   1. default node         cmd> node singleton.js 
 *                      2. if nodemon installed cmd> nodemon singleton.js
 *  Purpose         : we have to write the code using singlton design pattern to take one small exaple.
 *  @description    
 *  @file           : singleton.js
 *  @overview       : singleton design pattern.
 *  @module         : factory- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 31-12-2019
 *
 ******************************************************************************/
let readline = require("readline-sync");
let util=require('../utility/designPatternsUtility');
try{
    util.singletonDesign();
}
catch(e){
    console.log(e);
}