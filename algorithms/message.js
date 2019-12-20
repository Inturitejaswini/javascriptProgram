
/******************************************************************************
 *  Execution       :   1. default node         cmd> node message.js 
 *                      2. if nodemon installed cmd> nodemon message.js
 *                  
 * 
 *  Purpose         : . takes a command-line argument N, asks you to think of a number
 *        between 0 and N-1, where N = 2^n, and always guesses the answer with n questions.

*  @description    
 * 
 *  @file           : message.js
 *  @overview       : Use Binary Search to find the number

 *  @module         : message- This is optional if expeclictly its an npm or local package
 *  @author         : Tejaswini <chowdarytejaswini2@gmail.com>
 *  @version        : 1.0
 *  @since          : 19-12-2019
 *
 ******************************************************************************/

let readline = require("readline-sync");
let util=require('../utility/algorithmsUtility');
let firstName, lastName, fullName, contactNumber, date;
let message = "Hello <<name>>, We have your full name as <<full name>> in our system."
    + "Your contact number is 91-XXXXXXXXXX. Please, let us know in case of any clarification."
    + "Thank you BridgeLabz 01/01/2016.";
    firstName = readline.question("Enter Your First Name : ")
    lastName = readline.question("Enter Your Last Name : ")
    fullName = firstName + ' ' + lastName;
    contactNumber = readline.question("Enter contact number : ")
    date = readline.question("Enter date in dd/mm/yyyy format: ")
util.getDetails(message,firstName, lastName, fullName, contactNumber, date);
