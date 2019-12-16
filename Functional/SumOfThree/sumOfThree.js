let readLine = require('readline-sync');
let  n = readLine.question("enter the number of elements");
console.log("enter the elements");
function sumOfThree()
{
let arr= [];
let i;
for(i=0;i<n;i++)
{
    arr[i] = readLine.questionInt('');
}
console.log("sum of three numbers"+n,arr);
}
sumOfThree();
