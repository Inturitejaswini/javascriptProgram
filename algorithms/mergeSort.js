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