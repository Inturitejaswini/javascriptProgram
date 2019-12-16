function HarmonicNumber(n)
{
let sum=1;
for(let i=2;i<=n;i++){
    sum+=1/i;
}
return sum;
}
console.log(sum);
let readline = require("readline-sync");
let n = readline.question("Enter the N value");
HarmonicNumber(n);