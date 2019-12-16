let readline=require("readline-sync");
let n=readline.question("enter n number");
powerOfTwo()
{
let i=0;
let powerOfTwo=1;
while(i<=n){
    console.log(i+""+powerOfTwo);
    powerOfTwo=powerOfTwo*2;
    i=i+1;
}
}powerOfTwo();