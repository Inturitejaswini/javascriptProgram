/******************************************************************************
 *  Execution       :   1. default node         cmd> node factory.js 
 *                      2. if nodemon installed cmd> nodemon factory.js
 *  Purpose         :  to create a Computer Factory that can Produce PC, Laptop and Server Class 
 *                     Computers.
 *  @description    
 *  @file           : factory.js
 *  @overview       : Create an Abstract Computer Class and PC, Laptop and Server inherit from
 *                    Computer and ComputerFactory is able to create the corresponding Computer 
 *                    Object on request.
 *  @module         : factory- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          :31-12-2019
 *
 ******************************************************************************/
let readline = require("readline-sync");
let util=require('../../utility/designPatternsUtility');
try{
    util.factoryDesign();
}
catch(e){
    console.log(e);
}
