/******************************************************************************
 *  Execution       :   1. default node         cmd> node commercial.js 
 *                      2. if nodemon installed cmd> nodemodule commercial.js
 * purpose          :StockAccount.java implements a data type that might be used by a financial 
 *                   institution to keep track of customer information.
 *  @description    
 * 
 *  @file           :commercial.js
 *  @overview       :The StockAccount class also maintains a list of CompanyShares object which has
 *                   Stock Symbol and Number of Shares as well as DateTime of the transaction. 
 *                   When buy or sell is initiated StockAccount checks if CompanyShares are available
 *                   and accordingly update or create an Object.

 *  @module         :commercial.js - This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 30-12-2019
 *
 ******************************************************************************/
let readline=require('readline-sync');
let fs=require('fs');
let stockAccountData=fs.readFileSync('./commercial.json');
let buyData=readline.question("Enter the ShareNumber: ")
let sellData=readline.question("Enter the shareNumber for sell");
let total=stockAccount(buyData,sellData);
class StockAccount{
        stockAccount(accountName, shareNumber, stockPrice) {
            this.accountName = accountName;
            this.shareNumber = shareNumber;
            this.stockPrice = stockPrice;
        }
        buy() {
            return this.shareNumber=this.shareNumber+ this.buyData;
        }
        sell(sellData){
            return this.shareNumber=this.shareNumber-sellData;
        }
}
let obj = JSON.parse(stockAccountData);
let count=0;
let len = obj.accountList.length;
for(let i=0; i<len; i++){
    let accountName = obj.accountList[i].accountName;
    let shareNumber = obj.accountList[i].shareNumber;   
    let stockPrice = obj.accountList[i].stockPrice;
    count=count+obj.accountList[i].stockPrice;
    total=count;
}
    console.log("AccountName:"+accountName+","+"ShareNumber:"+shareNumber+","+"StockPric:"+stockPrice);
    console.log("Total price of rice is="+total);