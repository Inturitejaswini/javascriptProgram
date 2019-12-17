/******************************************************************************
 *  Execution       :   1. default node         cmd> node quardratic.js 
 *                      2. if nodemon installed cmd> nodemon quadratic.js
 * 
 *  Purpose         :   T find the roots of the equation a*x*x + b*x + c. 
 * 
 *  @description    
 * 
 *  @file           :quadratic.js
 *  @overview       : T find the roots of the equation a*x*x + b*x + c. 
 *  @module         :quadratic - This is optional if expeclictly its an npm or local package
 *  @author         :Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-12-2019
 *
 ******************************************************************************/
let readline = require("readline-sync");
let a = readline.question("enter a value");
let b = readline.question("enter b value");
let c = readline.question("enter c value");
function Quadratic() {
    let root1 = 0;
    let root2 = 0;
    let delta = Math.sqrt((b * b) - (4 * a * c));
    //if delta is positive
    if (delta > 0) {
        root1 = ((-b +(delta)) / (2 * a));
        root2 = ((-b -(delta)) / (2 * a));
        //print root values
        console.log(root1);
        console.log(root2);
    }
    //if delta is equal to 0
    else if (delta == 0) {
        root1 = root2 = -b / (2 * a);
        //print root values
        console.log(root1);
        console.log(root2);
    }
    //if delta is negative
    else {
        root1 = -b / (2 * a);
        root2 = Math.sqrt((-delta) / (2 * a));
        //print root values
        console.log(root1);
        console.log(root2);
    }
}
Quadratic();