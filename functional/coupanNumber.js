/******************************************************************************
 *  Execution       :   1. default node         cmd> node CouponNumber.js 
 *                      2. if nodemon installed cmd> nodemon CouponNumber.js
 * 
 *  Purpose         : Genrate distinct Coupon numbers  
 * 
 *  @description    
 * 
 *  @file           : Coupon.js
 *  @overview       : Coupon module to generate distinct coupon numbers.
 *  @module         : Coupon - This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-12-2019
 *
 ******************************************************************************/

let readline = require("readline-sync");
let number= readline.question("Enter Number of  Coupon You need :");
if(isNaN(number)) throw "Not a number";
let coupanList=new Array();
coupanList= getGeneratedCoupon(number);
console.log("The " +  + " Distinct Coupans are:");
console.log(coupanList); //prints the coupan numbers
// Method to generate coupan number and returns to the main method
function getGeneratedCoupon(n)
{
    let count = 0, randomCount = 0;
    let flag = true;
    let distinctCoupans=new Array();
    let coupanLength = 5;
    while (count < number) {
       let alphaNumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
      let coupan='';

        for (let i = 0; i < coupanLength; i++)
        {
           let length = alphaNumeric.length;
            coupan=coupan+(alphaNumeric.charAt((Math.floor(Math.random()*length)+1))); //each time calling the random function and alphanumeric will appended to the string
            randomCount++; //increment the randomcount for to count how many times random number generated
        }
        for (let i = 0; i < count; i++)
        {
            if (distinctCoupans[i] == coupan.toString()) //check the coupon distinct or not
            {
                flag = false;
            }
        }
        if (flag == true) {
            distinctCoupans.push(coupan.toString()); //distict coupan will added to the list
            count++;
        }
        flag = true;
    }
    console.log("Total Random number needed to have all distinct coupan number: " + randomCount); //prints the total number random used
    return distinctCoupans;
}