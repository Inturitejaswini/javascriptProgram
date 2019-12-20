/******************************************************************************
 *  Execution       :   1. default node         cmd> node sumOfThree.js 
 *                      2. if nodemon installed cmd> nodemon sumOfThree.js
 *                  
 * 
 *  Purpose         :  A program with cubic running time. Read in N integers 
 *                     and counts the   number of triples that sum to exactly 0.
*  @description    
 * 
 *  @file           : sumOfThree.js
 *  @overview       : Sum of three Integer adds to ZERO
 *  @module         : sumOfThree- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-12-2019
 *
 ******************************************************************************/
let readLine = require('readline-sync');
let util=require('../utility/functionalUtility');
try{
let  number = readLine.question("enter the number of elements");
let arr=new Array();
i=0;
while(i!=number){
    arr[i]=read.questionInt();
    i++
}
if(result===0){
    console.log("sum is zer");
}else{
    console.log("sum is not zero");
}
let result=util.sumOfThree(arr,number);
console.log("sumOfThree is",result);
}catch(e){
    console.log(e);
}