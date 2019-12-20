    /******************************************************************************
 *  Execution       :   1. default node         cmd> node mergeSort.js 
 *                      2. if nodemon installed cmd> nodemon mergeSort.js
 *                  
 * 
 *  Purpose         : a program to do Merge Sort of list of Strings.

*  @description    
 * 
 *  @file           : mergeSort.js
 *  @overview       : a program to do Merge Sort of list of Strings.
 *  @module         : mergeSort- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 18-12-2019
 *
 ******************************************************************************/
    let readline = require("readline-sync");
    let util = require('../utility/algorithmsUtility');
   try{
    console.log("Before Sorting String Array:",arr)
    let arr=[];
   let number=readline.question("enter no of words ");
   let i=0;
   while(i!=number){
     arr[i]=readline.question();
     i++;
   }
    let result= util.mergeSort(arr, 0, arr.length - 1);
    console.log("After Sorting String Array:",result);
   }
   catch(e){
consolelog(e);
   }