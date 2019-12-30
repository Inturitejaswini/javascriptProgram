/******************************************************************************
 *  Execution       :   1. default node         cmd> node stock.js 
 *                      2. if nodemon installed cmd> nodemodule stock.js
 * 
 *  Purpose         : Write a program to read in Stock Names, Number of Share, Share Price.
 *                   Print a Stock Report with total value of each Stock and the total value of Stock.
 *  @description    
 * 
 *  @file           :stock.js
 *  @overview       :Print the Stock Report.
 *  @module         :stock - This is optional if expeclictly its an npm or local package
 *  @author         :Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        :1.0
 *  @since          :28-12-2019
 ******************************************************************************/
let readline=require('readline-sync');
let  fs = require('fs');
let data = fs.readFileSync('./stock.json');
let obj = JSON.parse(data);
console.log('====================================');
console.log("Resultant of Stock report");
console.log('====================================');
let len = obj.stock.length;
let count=0;
for (let i = 0; i < len; i++) {
    let stockName = obj.stock[i].stockName;
    let noOfShares = obj.stock[i].noOfShares;
    let sharePrice = obj.stock[i].sharePrice;
    count=count+obj.stock[i].sharePrice;
    console.log("Name:"+stockName+","+"number:"+noOfShares+","+"price:"+sharePrice);
    console.log("Total price of shares =" + sharePrice*noOfShares);
    console.log("print the total share count"+count);
}
