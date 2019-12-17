
/******************************************************************************
*  Execution       :   1. default node         cmd> node flipcoin.js 
*                      2. if nodemon installed cmd> nodemon flipcoin.js
* 
*  Purpose         : Flip Coin and print percentage of Heads and Tails

*  @description    
* 
*  @file           : fllipcoin.js
*  @overview       : Flip Coin and print percentage of Heads and Tails 
*  @module         : flipcoins - This is optional if expeclictly its an npm or local package
*  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
*  @version        : 1.0
*  @since          : 13-12-2019
*
******************************************************************************/
function FlipCoin(n) {
	let count = 0, headcount = 0, tailscount = 0;
	//to check positive integer
	if (n > 0) {
		while (count < n) {
			//Each time different random number generated between 1 and 0
			if (Math.random() < 0.5) {
				headcount = headcount + 1; //heads count incremented
			}
			else {
				tailscount = tailscount + 1; //tails count incremented
			}
			count = count + 1;
		}
		console.log("Heads flip percentage= " + ((headcount / n) * 100) + "%"); //Print the heads flip percentage
		console.log("Tails flip percentage= " + ((tailscount / n) * 100) + "%"); //Print the Tails flip percentage
	}
	else {
		console.log("Please Enter positive Integer");
	}
}

let readline = require("readline-sync");
let n = readline.question("Enter number of Times to Flip the coin:");
FlipCoin(n);