const readline=require("readline-sync");
const x=readline.question("enter the x value:");
const y=readline.question("enter the y value:");
let distance=Math.sqrt(x*x+y*y);
console.log("distance from("+x+","+y+") to (0,0)="+distance);
