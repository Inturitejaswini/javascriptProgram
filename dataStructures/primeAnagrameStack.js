let readline = require("readline-sync");
let util = require('../utility/dataStructureUtility');
try{
    let n1=readline.question("enter the n1 value");
    let n2=readline.question("enter the n2 value");
    primeAnagrammeStack=anagrame(n1,n2);
    let result=util.primeAnagrameStack();
    console.log(result);
    }
    catch(e){
        console.log(e);
    }