let readline = require("readline-sync");
let util=require('../utility/algorithmsUtility');
let n= readline.question("Enter a number :")
let result=util.isPrimeRange(n);
console.log("the number is ",result);
if(result==true){
    console.log("it is a prime");
}else{
    console.log("not a prime");
}

