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
    //if(isNaN(contactNumber)) throw "Enters valid mobile no.";
    date = readline.question("Enter date in dd/mm/yyyy format: ")
util.getDetails(message,firstName, lastName, fullName, contactNumber, date);
