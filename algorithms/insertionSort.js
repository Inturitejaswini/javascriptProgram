let readline=require('readline-sync');
let arr=["gdf","hdg","fd","jhgd","gsf"];
console.log("before sorting array is:",arr);
let util = require("../utility/algorithmsUtility");
let result=util.insertionSort(arr);
console.log("after sorting array is :",result);
    
    