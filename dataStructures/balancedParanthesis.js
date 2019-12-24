/******************************************************************************
 *  Execution       :   1. default node         cmd> node balancedParanthesis.js 
 *                      2. if nodemon installed cmd> nodemodule balancedParanthesis.js
 * 
 *  Purpose         :     Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)
 *                        where parentheses are used to order the performance of operations. 
 *                        Ensure parentheses must appear in a balanced fashion.
 *  @description    
 * 
 *  @file           : balancedParanthesis.js
 *  @overview       :Simple Balanced Parentheses.
 *  @module         : balancedParanthesis - This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 22-12-2019
 *
 ******************************************************************************/
let readline = require("readline-sync");
let stack=require('../utility/dataStructureUtility');
try {
    let expression = readline.question("Enter Expression");//import the balancedParanthesis.js file
    stack.balancedParanthesis(expression);
}
catch (error) {
    console.log(error);
}