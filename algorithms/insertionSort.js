/******************************************************************************
 *  Execution       :   1. default node         cmd> node insertionSort.js 
 *                      2. if nodemon installed cmd> nodemon insertionSort.js
 * 
 *  Purpose         :Reads in strings and prints them in sorted order using insertion sort.
 * 
 *  @description    
 * 
 *  @file           : insertionSort.js
 *  @overview       : print the given array string using insertion sort in sorted order.
 *  @module         : insertionSort - This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-12-2019
 *
 ******************************************************************************/
let readline=require('readline-sync');
let util = require("../utility/algorithmsUtility");
try{
console.log("before sorting array is:",arr);
let arr=new Array(length);
 let number=readline.question("enter no of words ");
 let i=0;
 while(i!=number){
     arr[i]=readline.question();
     i++;
 }
let result=util.insertionSort(arr);
console.log("after sorting array is :",result);
}
catch{
    console.log(e);
} 
    