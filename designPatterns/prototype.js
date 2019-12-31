
/******************************************************************************
 *  Execution       :   1. default node         cmd> node prototype.js 
 *                      2. if nodemon installed cmd> nodemon prototype.js
 *  Purpose         : is used when the Object creation is a costly affair 
 *                    requires a lot of time and resources and you have a similar object already
 *                     existing.  
 *  @description    
 *  @file           : prototype.js
 *  @overview       :Use Prototype Pattern as shown in the Link above to create multiple 
 *                   Employee Object.
 *  @module         : prototype- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          :31-12-2019
 *
 ******************************************************************************/
let readline = require("readline-sync");
let util=require('../utility/designPatternsUtility');
try{
    util.prototypeDesign();
}
catch(e){
    console.log(e);
}



 