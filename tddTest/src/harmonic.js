/**
 * @param {number} number is a perameter.
 * @return finally using tdd test we have to check the harmonic number.
 */
let harmonic=(number) =>{
    let h=1;
    for(let i=2;i<=number;i++){
        h=h+1/i;
    }
}
module.exports=(number)=>{
    harmonic;
};