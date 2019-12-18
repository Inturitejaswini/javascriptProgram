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
 *  @since          : 13-12-2019
 *
 ******************************************************************************/
    let readline = require("readline-sync");
    let util = require('../utility/algorithmsUtility');
    let length = readline.question("Enter the total number of strings");
    arr = new Array(length);
    for (let i = 0; i < length; i++) {
        arr[i] = readline.question("Enter the array " + i + "  value  : ")
    }
    console.log("Before Sorting String Array")
    console.log(arr);
    let sortedArray = new Array();
    sortedArray = util.mergeSort(arr, 0, arr.length - 1);
    console.log("After Sorting String Array");
    console.log(sortedArray);