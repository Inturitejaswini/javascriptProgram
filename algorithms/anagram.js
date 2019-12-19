let readline=require('readline-sync');
let string1=readline.question("enter the first string");
let string2=readline.question("enter the second string");
let util = require("../utility/algorithmsUtility");
let result=util.isAnagram(string1,string2);
console.log("it is an anagram",result); 
    