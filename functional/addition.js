

let readline=require('readline-sync');
let util = require("../utility/functionalUtility");
try{
    let x=readline.question("enter x value");
    let y=readline.question("enter y value");
    let result=util.add(x,y);
    console.log(result);
}
catch(e){
    console.log(e);
}