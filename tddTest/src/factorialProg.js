/**
 * @param {number} number is a perameter.
 * @return  using tdd test,test the factorial programme the number is factorial or not.
 */

let factorial=(number) =>
{
    for (let factorial = 2; factorial * factorial <= N; factorial++) {
        while (number % factorial == 0) {
            console.log(factorial + " ");
            number = number/ factorial;
        }
    }
    if (number > 1)
        console.log(number);
    else
        console.log();
    } 
module.exports=(number)=>{
 factorial;
}