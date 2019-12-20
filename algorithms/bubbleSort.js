   /******************************************************************************
 *  Execution       :   1. default node         cmd> node bubbleSort.js 
 *                      2. if nodemon installed cmd> nodemon bubbleSort.js
 *                  
 * 
 *  Purpose         :  Reads in integers prints them in sorted order using Bubble Sort

*  @description    
 * 
 *  @file           : bubbleSort.js
 *  @overview       : print the elements in sorted list using bbble sort.
 *  @module         : bubbleSort- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 17-12-2019
 *
 ******************************************************************************/

let readline = require("readline-sync");
let util=require("../utility/algorithmsUtility");
try{
console.log("before sorting array is:"+"["+arr+"]");
let arr=[];
 let number=read.question("enter no of words ");
 let i=0;
 while(i!=number){
     arr[i]=read.question();
     i++;
 }
let sortedArray=util.bubbleSort(arr);
console.log("after sorting array is:"+"["+sortedArray+"]");
 }catch(e){
    console.log(e)
 }