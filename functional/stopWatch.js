
/******************************************************************************
 *  Execution       :   1. default node         cmd> node stopWatch.js 
 *                      2. if nodemon installed cmd> nodemon stopWatch.js
 * 
 *  Purpose         : Write a Stopwatch Program for measuring the time that 
 *                    elapses between the start and end clicks.

 *  @description    
 * 
 *  @file           : stopWatch.js
 *  @overview       : Simulate Stopwatch Program.
 *  @module         : stopWatch - This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-12-2019
 *
 ******************************************************************************/
let startTimer = 0;
let stopTimer = 0;
let elapsed=0;

//to start timer
function start() {
    let d=new Date();
    startTimer = d.getMilliseconds();
    console.log("Start Time is: " + (startTimer));
}

// to stop timer
function stop() {
    let d=new Date();
    stopTimer = d.getMilliseconds();
    console.log("Stop Time is: " + (stopTimer));
}

function getElapsedTime() {
    elapsed = Math.abs(Number(stopTimer) - Number(startTimer));
    return elapsed;
}
let readline = require("readline-sync");
readline.question("Press 'Enter' to Start Time: ");
start(); //to start the time call start method
readline.question("Press 'Enter' to Stop Time: ");
stop();  // to stop call stop method

let l = getElapsedTime(); //it will return elapsed time

console.log("Total Time Elapsed(in millisec) is:" + l);
console.log("Converting millisec to seconds: " + (Number(l) / 100) + " sec"); //converting millisecond to seconds