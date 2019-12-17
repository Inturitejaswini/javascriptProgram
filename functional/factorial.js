/******************************************************************************
 *  Execution       :   1. default node         cmd> factorial.js 
 *                      2. if nodemon installed cmd> nodemon factorial.js
 * 
 *  Purpose         :   Number to find the prime factors 
 * 
 *  @description    
 * 
 *  @file           : factorial.js
 *  @overview       :Computes the prime factorization of N using brute force.

 *  @module         : Distance- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-12-2019
 *
 ******************************************************************************/
const readLine= require('readline-sync');
let  n = readLine.question("enter any integer "); // asking user to enter the number  
function Factorial(){
    console.log("the prime factorization of"+n+"is");
    for(let factorial=2;factorial*factorial<=n;factorial++){
        while(n%factorial==0){
            console.log(factorial+" ");
            n=n/factorial;
        }
    }
    if(n>1)
    console.log(n);
    else{
        console.log();
    }
}
Factorial();