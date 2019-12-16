const readLine= require('readline-sync');
let  n = readLine.question("enter any integer "); // asking user to enter the number  
function Factorial(){
    console.log("the prime factorization of"+n+"is");
    for(let factorial=2;factorial*factorial<=n;factorial++){
        while(n%factorial==0){
            console.log(factorial+" ");
            n=n/factorial;
        }
    }
    if(n>1)
    console.log(n);
    else{
        console.log();
    }
}
Factorial();