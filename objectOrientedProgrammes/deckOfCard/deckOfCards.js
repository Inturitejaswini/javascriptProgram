/******************************************************************************
 *  Execution       :   1. default node         cmd> node deckOfCards.js 
 *                      2. if nodemon installed cmd> nodemodule deckOfCards.js
 * 
 *  Purpose         :  initialize deck of cards having suits & Ranks.
 *  @description    
 * 
 *  @file           :deckOfCards.js
 *  @overview       : Shuffle the cards using Random method and then distribute 9 Cards to 4 Players
 *                    and Print the Cards the received by the 4 Players using 2D Array…
 *  @module         :deckOfCards.js - This is optional if expeclictly its an npm or local package
 *  @author         :Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        :1.0
 *  @since          :30-12-2019
 ******************************************************************************/
let readline=require('readline-sync');
let suits=["Clubs", "Diamonds", "Hearts", "Spades"];
let ranks=["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
let n=suits.length*ranks.length;
//Deck inilization for store the value//
let deck=new Array(n);
for(let i=0;i<ranks.length; i++){
    for(let j=0; j<suits.length; j++){
        deck[suits.length*i+j]=ranks[i]+"of"+suits[j];
    }
}
//For suffle the cards//
for(let i=0; i<n; i++){
  let r=i+parseInt(Math.random()*(n-i));
    let temp=deck[r];
    deck[r]=deck[i];
    deck[i]=temp;
}
//For Printing the resultant of Deck of cards..
for(let i=0; i<4; i++){
    console.log("Person "+(i+1));
    for(let j=0;j<9; j++){
        console.log(deck[i+j*4]+"( card"+(i+j*4)+")");
    }
}